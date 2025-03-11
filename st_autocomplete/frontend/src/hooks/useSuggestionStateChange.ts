import { RefObject, useCallback, useEffect, useRef } from 'react';
import { dispatchDropdownResizeEvent, measureElementHeight } from '../utils/dropdownUtils';

/**
 * Hook to handle suggestion state changes and dispatch events
 */
export const useSuggestionStateChange = (
  suggestionsRef: RefObject<HTMLElement>,
  suggestionsCount: number
) => {
  const prevSuggestionsCountRef = useRef<number>(suggestionsCount);

  // Handle suggestion count changes
  useEffect(() => {
    const prevCount = prevSuggestionsCountRef.current;

    // If count changed, handle it
    if (prevCount !== suggestionsCount) {
      prevSuggestionsCountRef.current = suggestionsCount;

      // Trigger reflow to ensure proper positioning
      if (suggestionsRef.current) {
        // Force a reflow
        void suggestionsRef.current.getBoundingClientRect();

        // Dispatch a custom event that positioning hooks can listen for
        window.dispatchEvent(
          new CustomEvent('suggestionsListChanged', {
            detail: {
              prevCount,
              currentCount: suggestionsCount,
            },
          })
        );

        // Dispatch resize event after a short delay to ensure DOM has updated
        setTimeout(() => {
          if (suggestionsRef.current) {
            const rect = suggestionsRef.current.getBoundingClientRect();
            dispatchDropdownResizeEvent(rect.width, rect.height);
          }
        }, 50);
      }
    }
  }, [suggestionsCount, suggestionsRef]);
};
