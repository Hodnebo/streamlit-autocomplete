import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { calculateDropdownPosition, measureElementHeight } from '../utils/dropdownUtils';

// Event interfaces
interface SuggestionChangeEvent extends CustomEvent {
  detail: { prevCount: number; currentCount: number };
}

interface DropdownResizeEvent extends CustomEvent {
  detail: { width: number; height: number };
}

interface DropdownPosition {
  top: string;
  left: string;
  width: string;
}

/**
 * Hook to manage dropdown position with improved reliability
 */
export const useSimplifiedDropdownPosition = (
  inputRef: RefObject<HTMLInputElement>,
  suggestionsRef: RefObject<HTMLDivElement>,
  showSuggestions: boolean,
  dropdownDirection: string = 'down'
) => {
  const [position, setPosition] = useState<DropdownPosition>({
    top: dropdownDirection === 'up' ? '0px' : '100%',
    left: '0',
    width: '100%',
  });
  const [dropdownHeight, setDropdownHeight] = useState(0);

  // Update position based on height
  const updatePosition = useCallback(
    (height: number) => {
      if (height <= 0) return;

      setDropdownHeight(height);
      const newPosition = calculateDropdownPosition(inputRef, height, dropdownDirection);
      setPosition(newPosition);
    },
    [inputRef, dropdownDirection]
  );

  // Handler for suggestion list changes
  const handleSuggestionsChange = useCallback(
    (event: SuggestionChangeEvent) => {
      if (!showSuggestions || !suggestionsRef.current) return;

      // Use timeout to allow DOM to update first
      setTimeout(() => {
        const height = measureElementHeight(suggestionsRef.current);
        if (height > 0) {
          updatePosition(height);

          // Verify position after a short delay
          setTimeout(() => {
            if (suggestionsRef.current) {
              const updatedHeight = measureElementHeight(suggestionsRef.current);
              if (updatedHeight > 0 && Math.abs(updatedHeight - height) > 1) {
                updatePosition(updatedHeight);
              }
            }
          }, 50);
        }
      }, 10);
    },
    [showSuggestions, suggestionsRef, updatePosition]
  );

  // Handler for resize events
  const handleResize = useCallback(
    (event: DropdownResizeEvent) => {
      const { height } = event.detail;
      if (height > 0) {
        // Short timeout to ensure consistency
        setTimeout(() => updatePosition(height), 10);
      }
    },
    [updatePosition]
  );

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('suggestionsListChanged', handleSuggestionsChange as EventListener);
    window.addEventListener('dropdownResized', handleResize as EventListener);

    return () => {
      window.removeEventListener(
        'suggestionsListChanged',
        handleSuggestionsChange as EventListener
      );
      window.removeEventListener('dropdownResized', handleResize as EventListener);
    };
  }, [handleSuggestionsChange, handleResize]);

  // Initial position update when dropdown becomes visible
  useEffect(() => {
    if (showSuggestions && suggestionsRef.current) {
      setTimeout(() => {
        const height = measureElementHeight(suggestionsRef.current);
        if (height > 0) {
          updatePosition(height);

          // Verify position after a short delay
          setTimeout(() => {
            if (suggestionsRef.current) {
              const updatedHeight = measureElementHeight(suggestionsRef.current);
              if (updatedHeight > 0 && Math.abs(updatedHeight - height) > 1) {
                updatePosition(updatedHeight);
              }
            }
          }, 50);
        }
      }, 10);
    }
  }, [showSuggestions, suggestionsRef, updatePosition]);

  return {
    position,
    dropdownHeight,
  };
};
