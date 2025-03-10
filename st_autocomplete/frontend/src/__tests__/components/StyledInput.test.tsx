import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import StyledInput from '../../components/StyledInput';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

describe('StyledInput', () => {
  const defaultProps = {
    value: '',
    onChange: jest.fn(),
    onKeyDown: jest.fn(),
    placeholder: 'Type something...',
    triggerChars: ['@', '#'],
  };

  test('renders input with placeholder', () => {
    render(<StyledInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    render(<StyledInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Type something...');

    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  test('calls onKeyDown when key is pressed', () => {
    render(<StyledInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Type something...');

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(defaultProps.onKeyDown).toHaveBeenCalled();
  });

  test('renders styled tags correctly', () => {
    // Input with a completed tag
    const valueWithTag = '@react\u200B is awesome';

    render(
      <StyledInput
        {...defaultProps}
        value={valueWithTag}
        tagStyles={{ '@': { backgroundColor: '#e8f0fe', color: '#1a73e8' } }}
      />
    );

    // Check that the styled overlay contains the tag
    const overlay = document.querySelector('div[style*="position: absolute"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay?.textContent).toContain('@react');
  });

  test('handles disabled state', () => {
    render(<StyledInput {...defaultProps} disabled={true} />);
    const input = screen.getByPlaceholderText('Type something...');
    expect(input).toBeDisabled();
  });
});
