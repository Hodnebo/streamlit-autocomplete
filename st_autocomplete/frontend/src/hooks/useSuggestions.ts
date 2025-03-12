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

  // Track the previous value to detect changes
  const prevValueRef = useRef(value);
  // Track the previous suggestions list to maintain selection
  const prevSuggestionsRef = useRef<string[]>([]);
  // Track the user's last manually selected suggestion
  const lastSelectedIndexRef = useRef<number>(0);
  // Track if user has manually hovered/selected an item
  const userInteractedRef = useRef<boolean>(false);

  // Update suggestions based on input value and cursor position
  useEffect(() => {
    const { triggerChar, triggerPos, textAfterTrigger } = findTriggerInfo(
      value,
      cursorPosition,
      triggerChars
    );

    // If we found a trigger character
    if (triggerPos !== -1 && triggerChar) {
      // Check if trigger is followed by a zero-width space
      const zeroWidthSpacePos = value.indexOf(ZERO_WIDTH_SPACE, triggerPos);

      // If there's a zero-width space after the trigger AND the cursor is after it,
      // don't show suggestions (completed selection)
      if (zeroWidthSpacePos > -1 && zeroWidthSpacePos < cursorPosition) {
        setShowSuggestions(false);
        return;
      }

      // Otherwise, show suggestions
      setActiveTrigger(triggerChar);
      setTriggerStartPosition(triggerPos);
      setSearchQuery(textAfterTrigger);

      // Filter suggestions based on what's typed after the trigger
      const availableSuggestions = suggestions[triggerChar] || [];
      const filteredSuggestions = filterSuggestions(availableSuggestions, textAfterTrigger);

      // Store previous suggestions for comparison
      const prevSuggestions = prevSuggestionsRef.current;
      prevSuggestionsRef.current = filteredSuggestions;

      // Set active suggestions
      setActiveSuggestions(filteredSuggestions);

      // Determine the selected index
      if (filteredSuggestions.length > 0) {
        // If user has manually selected something, try to maintain that selection
        if (userInteractedRef.current && prevSuggestions.length > 0) {
          // Find the previously selected suggestion in the new list
          if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < prevSuggestions.length) {
            const selectedSuggestion = prevSuggestions[selectedSuggestionIndex];
            const newIndex = filteredSuggestions.indexOf(selectedSuggestion);

            // If the suggestion still exists in the new list, use its index
            if (newIndex >= 0) {
              setSelectedSuggestionIndex(newIndex);
            } else {
              // If not found, use the last manually selected index if in range
              const indexToUse = Math.min(
                lastSelectedIndexRef.current,
                filteredSuggestions.length - 1
              );
              setSelectedSuggestionIndex(indexToUse);
            }
          } else {
            // Fallback to first suggestion if the index is invalid
            setSelectedSuggestionIndex(0);
          }
        } else {
          // If user hasn't interacted, always default to first suggestion
          setSelectedSuggestionIndex(0);
        }

        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
      return;
    }

    // If we get here, no valid trigger was found
    setShowSuggestions(false);
    setActiveTrigger(null);
    setTriggerStartPosition(-1);
    setSearchQuery('');
    userInteractedRef.current = false; // Reset interaction flag when no suggestions shown

    // Update the previous value reference
    prevValueRef.current = value;
  }, [value, cursorPosition, triggerChars, suggestions, selectedSuggestionIndex]);

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

      // Close suggestions immediately
      setShowSuggestions(false);
      userInteractedRef.current = false; // Reset interaction flag after selection

      return { newValue, newCursorPos };
    },
    [activeTrigger, triggerStartPosition, value, cursorPosition]
  );

  // Reset when value is empty
  useEffect(() => {
    if (!value) {
      setShowSuggestions(false);
      userInteractedRef.current = false; // Reset interaction flag
      prevValueRef.current = '';
    }
  }, [value]);

  // Handle keyboard navigation
  const handleKeyNavigation = (key: string) => {
    switch (key) {
      case 'ArrowDown':
        userInteractedRef.current = true; // Mark as user interaction
        setSelectedSuggestionIndex((prev: number) => {
          const newIndex = prev < activeSuggestions.length - 1 ? prev + 1 : 0;
          lastSelectedIndexRef.current = newIndex; // Store last selection
          return newIndex;
        });
        return true;

      case 'ArrowUp':
        userInteractedRef.current = true; // Mark as user interaction
        setSelectedSuggestionIndex((prev: number) => {
          const newIndex = prev > 0 ? prev - 1 : activeSuggestions.length - 1;
          lastSelectedIndexRef.current = newIndex; // Store last selection
          return newIndex;
        });
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
        userInteractedRef.current = false; // Reset interaction flag
        return true;

      default:
        return null;
    }
  };

  // Wrapper for hover to track user interaction
  const handleSuggestionHover = useCallback((index: number) => {
    userInteractedRef.current = true; // Mark as user interaction
    lastSelectedIndexRef.current = index; // Store last selection
    setSelectedSuggestionIndex(index);
  }, []);

  return {
    showSuggestions,
    activeSuggestions,
    selectedSuggestionIndex,
    setSelectedSuggestionIndex: handleSuggestionHover, // Use the wrapper instead
    handleSuggestionClick,
    handleKeyNavigation,
    setShowSuggestions,
    searchQuery,
  };
};
