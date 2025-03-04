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

  test('handles suggestion selection', () => {
    const { result } = renderHook(() => 
      useSuggestions('Hello @', 7, triggerChars, suggestions)
    );
    
    let selection;
    act(() => {
      selection = result.current.handleSuggestionClick('user1');
    });
    
    expect(selection).not.toBeNull();
    expect(selection?.newValue).toBe('Hello @user1\u200B ');
    expect(selection?.newCursorPos).toBe(14); // 'Hello @user1\u200B '.length
  });
}); 