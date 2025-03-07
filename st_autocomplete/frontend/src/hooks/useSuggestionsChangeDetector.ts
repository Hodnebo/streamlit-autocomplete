import { useEffect, useRef } from 'react';

interface SuggestionsChangeHandler {
  (previousCount: number, currentCount: number): void;
}

/**
 * Hook that detects changes in suggestions list count and calls a handler
 */
export const useSuggestionsChangeDetector = (
  suggestionsCount: number,
  onSuggestionsChange: SuggestionsChangeHandler
): void => {
  const prevSuggestionsCountRef = useRef<number>(suggestionsCount);
  const handlerRef = useRef(onSuggestionsChange);

  // Update handler ref when callback changes
  useEffect(() => {
    handlerRef.current = onSuggestionsChange;
  }, [onSuggestionsChange]);

  // Detect changes in suggestions count
  useEffect(() => {
    const prevCount = prevSuggestionsCountRef.current;

    // If count changed, call handler
    if (prevCount !== suggestionsCount) {
      handlerRef.current(prevCount, suggestionsCount);
      prevSuggestionsCountRef.current = suggestionsCount;

      // Dispatch a custom event that others can listen for
      window.dispatchEvent(
        new CustomEvent('suggestionsListChanged', {
          detail: {
            prevCount,
            currentCount: suggestionsCount,
          },
        })
      );
    }
  }, [suggestionsCount]);
};
