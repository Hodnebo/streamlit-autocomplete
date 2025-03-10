import { useCallback, useEffect, useState, useRef } from 'react';
import {
  calculateCursorPosition,
  filterSuggestions,
  findTriggerInfo,
  formatSuggestionForInsertion,
  ZERO_WIDTH_SPACE,
} from '../utils/autocompleteUtils';

/**
 * Hook to manage suggestions for autocomplete
 */
export const useSuggestions = (
  value: string,
  cursorPosition: number,
  triggerChars: string[],
  suggestions: Record<string, string[]>
) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([]);
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [triggerStartPosition, setTriggerStartPosition] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  // Keep track of completed selections to prevent suggestions from reappearing
  const completedSelectionsRef = useRef<Set<number>>(new Set());

  // Update suggestions based on input value and cursor position
  useEffect(() => {
    const { triggerChar, triggerPos, textAfterTrigger } = findTriggerInfo(
      value,
      cursorPosition,
      triggerChars
    );

    // If we found a trigger character
    if (triggerPos !== -1 && triggerChar) {
      // Check if this trigger position is part of a completed selection
      if (completedSelectionsRef.current.has(triggerPos)) {
        // This is a completed selection, don't show suggestions
        setShowSuggestions(false);
        return;
      }

      // Check if this is followed by a zero-width space, which indicates
      // a completed selection that might not be in our tracking set yet
      if (
        value.indexOf(ZERO_WIDTH_SPACE, triggerPos) > 0 &&
        value.indexOf(ZERO_WIDTH_SPACE, triggerPos) < cursorPosition
      ) {
        // Add to completed selections
        completedSelectionsRef.current.add(triggerPos);
        setShowSuggestions(false);
        return;
      }

      setActiveTrigger(triggerChar);
      setTriggerStartPosition(triggerPos);
      setSearchQuery(textAfterTrigger);

      // Filter suggestions based on what's typed after the trigger
      const availableSuggestions = suggestions[triggerChar] || [];
      const filteredSuggestions = filterSuggestions(availableSuggestions, textAfterTrigger);

      setActiveSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
      setSelectedSuggestionIndex(0);
      return;
    }

    // If we get here, no valid trigger was found
    setShowSuggestions(false);
    setActiveTrigger(null);
    setTriggerStartPosition(-1);
    setSearchQuery('');
  }, [value, cursorPosition, triggerChars, suggestions]);

  // Handle suggestion selection
  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      if (!activeTrigger || triggerStartPosition === -1) return null;

      const textBeforeTrigger = value.substring(0, triggerStartPosition);
      const textAfterCursor = value.substring(cursorPosition);

      // Format the suggestion with a zero-width space and regular space
      const formattedSuggestion = formatSuggestionForInsertion(suggestion) + ' ';

      // Create the new value by combining text before trigger, trigger, suggestion with zero-width space, and text after cursor
      const newValue = textBeforeTrigger + activeTrigger + formattedSuggestion + textAfterCursor;

      // Calculate the new cursor position consistently
      const newCursorPos = calculateCursorPosition(triggerStartPosition, activeTrigger, suggestion);

      // Add this trigger position to completed selections so suggestions don't reappear
      completedSelectionsRef.current.add(triggerStartPosition);

      // Close suggestions immediately
      setShowSuggestions(false);

      // Force the DOM to update immediately to avoid having to submit suggestion twice
      setTimeout(() => {
        setShowSuggestions(false);
      }, 0);

      return { newValue, newCursorPos };
    },
    [activeTrigger, triggerStartPosition, value, cursorPosition]
  );

  // Reset completed selections when value is empty
  useEffect(() => {
    if (!value) {
      completedSelectionsRef.current.clear();
    }
  }, [value]);

  // Handle keyboard navigation
  const handleKeyNavigation = (key: string) => {
    switch (key) {
      case 'ArrowDown':
        setSelectedSuggestionIndex((prev: number) =>
          prev < activeSuggestions.length - 1 ? prev + 1 : 0
        );
        return true;

      case 'ArrowUp':
        setSelectedSuggestionIndex((prev: number) =>
          prev > 0 ? prev - 1 : activeSuggestions.length - 1
        );
        return true;

      case 'Enter':
      case 'Tab':
        // Only handle Enter/Tab if we have suggestions and a valid selection
        if (
          showSuggestions &&
          activeSuggestions.length > 0 &&
          selectedSuggestionIndex >= 0 &&
          selectedSuggestionIndex < activeSuggestions.length
        ) {
          return handleSuggestionClick(activeSuggestions[selectedSuggestionIndex]);
        }
        return null;

      case 'Escape':
        setShowSuggestions(false);
        return true;

      default:
        return null;
    }
  };

  return {
    showSuggestions,
    activeSuggestions,
    selectedSuggestionIndex,
    setSelectedSuggestionIndex,
    handleSuggestionClick,
    handleKeyNavigation,
    setShowSuggestions,
    searchQuery,
  };
};
