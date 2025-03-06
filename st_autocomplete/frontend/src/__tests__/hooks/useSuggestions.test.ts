import { renderHook, act } from '@testing-library/react-hooks';
import { useSuggestions } from '../../hooks/useSuggestions';

describe('useSuggestions', () => {
  const triggerChars = ['@', '#'];
  const suggestions = {
    '@': ['user1', 'user2', 'admin'],
    '#': ['react', 'typescript', 'javascript']
  };

  test('shows no suggestions initially', () => {
    const { result } = renderHook(() =>
      useSuggestions('', 0, triggerChars, suggestions)
    );

    expect(result.current.showSuggestions).toBe(false);
    expect(result.current.activeSuggestions).toEqual([]);
  });

  test('shows suggestions when trigger character is found', () => {
    const { result } = renderHook(() =>
      useSuggestions('Hello @u', 8, triggerChars, suggestions)
    );

    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions).toContain('user1');
    expect(result.current.activeSuggestions).toContain('user2');
  });

  test('filters suggestions based on text after trigger', () => {
    const { result } = renderHook(() =>
      useSuggestions('Hello @user', 11, triggerChars, suggestions)
    );

    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions).toContain('user1');
    expect(result.current.activeSuggestions).toContain('user2');
    expect(result.current.activeSuggestions).not.toContain('admin');
  });

  test('handles keyboard navigation', () => {
    const { result } = renderHook(() =>
      useSuggestions('Hello @', 7, triggerChars, suggestions)
    );

    // Initial state
    expect(result.current.selectedSuggestionIndex).toBe(0);

    // Navigate down
    act(() => {
      result.current.handleKeyNavigation('ArrowDown');
    });
    expect(result.current.selectedSuggestionIndex).toBe(1);

    // Navigate up
    act(() => {
      result.current.handleKeyNavigation('ArrowUp');
    });
    expect(result.current.selectedSuggestionIndex).toBe(0);

    // Escape closes suggestions
    act(() => {
      result.current.handleKeyNavigation('Escape');
    });
    expect(result.current.showSuggestions).toBe(false);
  });

  test('handles suggestion selection on first selection', () => {
    const { result } = renderHook(() =>
      useSuggestions('Hello @', 7, triggerChars, suggestions)
    );

    let selection;
    act(() => {
      selection = result.current.handleSuggestionClick('user1');
    });

    expect(selection).not.toBeNull();
    expect(result.current.showSuggestions).toBe(false);
    expect(selection?.newValue).toBe('Hello @user1\u200B ');
    expect(selection?.newCursorPos).toBe(14); // 'Hello @user1\u200B '.length
  });

  test('properly applies suggestion multiple times in a row', () => {
    // First, simulate typing '@'
    const { result, rerender } = renderHook(
      ({ value, cursor }) => useSuggestions(value, cursor, triggerChars, suggestions),
      { initialProps: { value: '', cursor: 0 } }
    );

    // Update to '@'
    rerender({ value: '@', cursor: 1 });

    // Verify suggestions are shown
    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions).toEqual(['user1', 'user2', 'admin']);

    // Select the first suggestion
    let selection;
    act(() => {
      selection = result.current.handleSuggestionClick('user1');
    });

    // Verify selection result is correct
    expect(selection).not.toBeNull();
    expect(result.current.showSuggestions).toBe(false);
    expect(selection?.newValue).toBe('@user1\u200B ');
    expect(selection?.newCursorPos).toBe(8); // '@user1\u200B '.length

    // Now simulate typing another trigger
    rerender({ value: '@user1\u200B #', cursor: 9 });

    // Verify new suggestions are shown for the new trigger
    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions).toEqual(['react', 'typescript', 'javascript']);

    // Select another suggestion
    let secondSelection;
    act(() => {
      secondSelection = result.current.handleSuggestionClick('react');
    });

    // Verify second selection is also correct
    expect(secondSelection).not.toBeNull();
    expect(secondSelection?.newValue).toBe('@user1\u200B #react\u200B ');
    expect(secondSelection?.newCursorPos).toBe(16); // '@user1\u200B #react\u200B '.length
  });

  test('handles consecutive suggestion selections correctly', () => {
    // This test specifically targets the issue where suggestions aren't applied correctly the first time

    // Setup the hook with a trigger character already typed
    const { result } = renderHook(() =>
      useSuggestions('@', 1, triggerChars, suggestions)
    );

    // Verify initial state
    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions.length).toBeGreaterThan(0);

    // First selection
    let firstSelection;
    act(() => {
      firstSelection = result.current.handleSuggestionClick('user1');
    });

    // Verify first selection result
    expect(firstSelection).not.toBeNull();
    expect(firstSelection?.newValue).toBe('@user1\u200B ');

    // Simulate applying the first suggestion and typing another trigger
    // We need to rerender the hook with the new value
    const { result: newResult } = renderHook(() =>
      useSuggestions('@user1\u200B #', 9, triggerChars, suggestions)
    );

    // Verify new suggestions are shown
    expect(newResult.current.showSuggestions).toBe(true);
    expect(newResult.current.activeSuggestions).toEqual(['react', 'typescript', 'javascript']);

    // Second selection
    let secondSelection;
    act(() => {
      secondSelection = newResult.current.handleSuggestionClick('react');
    });

    // Verify second selection result
    expect(secondSelection).not.toBeNull();
    expect(secondSelection?.newValue).toBe('@user1\u200B #react\u200B ');
  });

  test('correctly identifies trigger after a completed tag', () => {
    // This test checks if the hook correctly identifies a trigger after a completed tag

    // Setup with a completed tag and a new trigger
    const value = '@user1\u200B #';
    const cursorPos = 9; // After the '#'

    const { result } = renderHook(() =>
      useSuggestions(value, cursorPos, triggerChars, suggestions)
    );

    // Verify suggestions are shown for the new trigger
    expect(result.current.showSuggestions).toBe(true);
    expect(result.current.activeSuggestions).toEqual(['react', 'typescript', 'javascript']);

    // Try selecting a suggestion
    let selection;
    act(() => {
      selection = result.current.handleSuggestionClick('react');
    });

    // Verify selection works
    expect(selection).not.toBeNull();
    expect(result.current.showSuggestions).toBe(false);
    expect(selection?.newValue).toBe('@user1\u200B #react\u200B ');

  });
}); 