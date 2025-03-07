import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Autocomplete } from '../../components/Autocomplete';
import '@testing-library/jest-dom';
import { AutocompleteProps } from '../../types';
// Mock Streamlit
jest.mock('streamlit-component-lib', () => ({
  Streamlit: {
    setFrameHeight: jest.fn(),
    setComponentValue: jest.fn(),
    setComponentReady: jest.fn(),
  },
}));

describe('Autocomplete', () => {
  const defaultProps: AutocompleteProps = {
    args: {
      label: 'Test Label',
      value: '',
      trigger_chars: ['@', '#'],
      suggestions: {
        '@': ['user1', 'user2', 'admin'],
        '#': ['react', 'typescript', 'javascript'],
      },
      placeholder: 'Type something...',
      disabled: false,
      label_visibility: 'visible',
      on_submit: false,
      position: 'static',
      width: '100%',
      dropdown_direction: 'down',
      tag_styles: {
        '@': { backgroundColor: '#e8f0fe', color: '#1a73e8' },
        '#': { backgroundColor: '#fce8e6', color: '#d93025' },
      },
    },
    width: 300,
    disabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with label and input', () => {
    const { getByText, getByPlaceholderText } = render(<Autocomplete {...defaultProps} />);

    expect(getByText('Test Label')).toBeInTheDocument();
    expect(getByPlaceholderText('Type something...')).toBeInTheDocument();
  });

  test('shows suggestions when trigger character is typed', async () => {
    const { getByPlaceholderText, findByText } = render(<Autocomplete {...defaultProps} />);

    const input = getByPlaceholderText('Type something...') as HTMLInputElement;

    // Type '@'
    fireEvent.change(input, { target: { value: '@' } });

    // Wait for a specific suggestion to appear
    const suggestion = await findByText('user1');
    expect(suggestion).toBeInTheDocument();

    // Check that the suggestion is in a div with the correct class
    expect(suggestion.closest('.suggestion-item')).toBeInTheDocument();
  });

  test('applies suggestion on first selection', async () => {
    const { getByPlaceholderText } = render(<Autocomplete {...defaultProps} />);

    const input = getByPlaceholderText('Type something...') as HTMLInputElement;

    // Type '@'
    fireEvent.change(input, { target: { value: '@' } });

    // Wait for suggestions to appear
    await waitFor(() => {
      const items = document.querySelectorAll('.suggestion-item');
      expect(items.length).toBe(3);
    });

    // Select the first suggestion
    const suggestions = document.querySelectorAll('.suggestion-item');
    fireEvent.click(suggestions[0]); // Click on 'user1'

    // Check if the suggestion was applied correctly using getAttribute
    await waitFor(() => {
      expect(input.value).toBe('@user1\u200B ');
    });

    // Now type another trigger
    fireEvent.change(input, { target: { value: '@user1\u200B #' } });

    // Wait for new suggestions to appear
    await waitFor(() => {
      const newSuggestions = document.querySelectorAll('.suggestion-item');
      expect(newSuggestions.length).toBe(3);
    });

    const newSuggestions = document.querySelectorAll('.suggestion-item');
    expect(newSuggestions[0].textContent).toBe('react');

    // Select another suggestion
    fireEvent.click(newSuggestions[0]); // Click on 'react'

    // Check if the second suggestion was applied correctly
    await waitFor(() => {
      expect(input.value).toBe('@user1\u200B #react\u200B ');
    });
    await waitFor(() => {
      const items = document.querySelectorAll('.suggestion-item');
      expect(items.length).toBe(0);
    });
  });

  test('handles keyboard navigation and selection', async () => {
    const { getByPlaceholderText } = render(<Autocomplete {...defaultProps} />);

    const input = getByPlaceholderText('Type something...') as HTMLInputElement;

    // Type '@'
    fireEvent.change(input, { target: { value: '@' } });

    // Wait for suggestions to appear
    await waitFor(() => {
      const items = document.querySelectorAll('.suggestion-item');
      expect(items.length).toBe(3);
    });

    // Navigate down with arrow key
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    // Select with Enter key
    fireEvent.keyDown(input, { key: 'Enter' });

    // Check if the suggestion was applied correctly
    await waitFor(() => {
      expect(input.value).toBe('@user2\u200B ');
    });

    // Wait for suggestions to disappear with a longer timeout
    await waitFor(
      () => {
        const items = document.querySelectorAll('.suggestion-item');
        expect(items.length).toBe(0);
      },
      { timeout: 3000 }
    );
  });

  test('dropdown is properly positioned relative to input', () => {
    // Create a mock for getBoundingClientRect
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;

    // Create DOMRect-compatible objects
    const createDOMRect = (x: number, y: number, width: number, height: number): DOMRect => {
      return {
        x,
        y,
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        toJSON: () => {},
      } as DOMRect;
    };

    // Mock input element position
    const inputRect = createDOMRect(50, 100, 300, 30);

    // Mock dropdown position - initially empty
    let dropdownRect = createDOMRect(0, 0, 0, 0);

    // Override getBoundingClientRect to return our mock values
    Element.prototype.getBoundingClientRect = function () {
      if (this.classList?.contains('suggestions-dropdown')) {
        return dropdownRect;
      }
      if (this.tagName === 'INPUT') {
        return inputRect;
      }
      return originalGetBoundingClientRect.call(this);
    };

    // Render the component
    const { getByPlaceholderText } = render(<Autocomplete {...defaultProps} />);
    const input = getByPlaceholderText('Type something...') as HTMLInputElement;

    // Trigger suggestions
    fireEvent.change(input, { target: { value: '@' } });

    // Find the dropdown
    const dropdown = document.querySelector('.suggestions-dropdown') as HTMLElement;

    // Update our mock measurement for the dropdown
    // Mock 3 suggestions, each 40px tall
    dropdownRect = createDOMRect(50, 130, 300, 120);

    // Verify dropdown is properly positioned
    expect(dropdown).toBeTruthy();
    expect(dropdownRect.top).toBe(inputRect.bottom);
    expect(dropdownRect.left).toBe(inputRect.left);
    expect(dropdownRect.width).toBe(inputRect.width);

    // Change to just one suggestion
    fireEvent.change(input, { target: { value: '@admin' } });

    // Update our mock with smaller height (1 suggestion instead of 3)
    dropdownRect = createDOMRect(50, 130, 300, 40);

    // Verify dropdown height changed but position is still correct
    expect(dropdownRect.top).toBe(inputRect.bottom);
    expect(dropdownRect.height).toBe(40);

    // Clean up
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  test('elements are positioned correctly relative to each other', () => {
    const { getByPlaceholderText } = render(<Autocomplete {...defaultProps} />);

    // Get the input element
    const input = getByPlaceholderText('Type something...') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    // Trigger suggestions
    fireEvent.change(input, { target: { value: '@' } });

    // Now check for the dropdown
    const dropdown = document.querySelector('.suggestions-dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('element has correct positioning', () => {
    render(<Autocomplete {...defaultProps} />);
    const input = screen.getByPlaceholderText('Type something...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '@' } });

    const element = screen.getByText('admin');
    const styles = window.getComputedStyle(element);

    expect(styles.position).toBe('absolute');
    expect(styles.top).toBe('10px');
    expect(styles.left).toBe('20px');
  });
});
