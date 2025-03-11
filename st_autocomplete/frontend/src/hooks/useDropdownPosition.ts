import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface DropdownPosition {
  top: string;
  left: string;
  width: string;
}

interface SuggestionChangeEvent extends CustomEvent {
  detail: { prevCount: number; currentCount: number };
}

interface DropdownResizeEvent extends CustomEvent {
  detail: { width: number; height: number };
}

/**
 * Hook to calculate dropdown position based on input element and direction
 */
export const useDropdownPosition = (
  inputRef: RefObject<HTMLInputElement>,
  suggestionsRef: RefObject<HTMLDivElement>,
  showSuggestions: boolean,
  dropdownDirection: string = 'down'
) => {
  const [dropdownHeight, setDropdownHeight] = useState(150); // Default height estimate
  const [position, setPosition] = useState<DropdownPosition>({
    top: dropdownDirection === 'up' ? '0px' : '100%',
    left: '0',
    width: '100%',
  });

  // Keep a ref to the last calculation to prevent redundant updates
  const lastHeightRef = useRef<number>(dropdownHeight);

  // Calculate dropdown position based on direction and current dimensions
  const calculatePosition = useCallback((): DropdownPosition => {
    if (!inputRef.current) {
      return dropdownDirection === 'up'
        ? { top: '0px', left: '0px', width: '100%' }
        : { top: '100%', left: '0', width: '100%' };
    }

    // Get input position
    const rect = inputRef.current.getBoundingClientRect();
    const inputHeight = rect.height;

    // For upward dropdowns in an iframe, adjust coordinates
    let top = rect.top;
    let left = rect.left;

    try {
      if (window !== window.parent && dropdownDirection === 'up') {
        const iframes = window.parent.document.querySelectorAll('iframe');
        for (let i = 0; i < iframes.length; i++) {
          try {
            if (iframes[i].contentWindow === window) {
              const iframeRect = iframes[i].getBoundingClientRect();
              top += iframeRect.top;
              left += iframeRect.left;
              break;
            }
          } catch (e) {
            /* Ignore access errors */
          }
        }
      }
    } catch (e) {
      console.error('Error calculating position:', e);
    }

    if (dropdownDirection === 'up') {
      // For 'up' direction, position directly above the input with a safety margin
      return {
        top: Math.max(0, top - dropdownHeight - 2) + 'px', // Position above input with 2px buffer
        left: left + 'px',
        width: rect.width + 'px',
      };
    } else {
      // For 'down' direction, position directly below the input
      return {
        top: '100%',
        left: '0',
        width: '100%',
      };
    }
  }, [dropdownDirection, dropdownHeight, inputRef]);

  // Update position when dimensions change
  const updatePosition = useCallback(
    (height: number) => {
      // Always update when we receive a specific height instruction
      // This ensures the dropdown is positioned correctly
      lastHeightRef.current = height;
      setDropdownHeight(height);
      const newPosition = calculatePosition();
      setPosition(newPosition);
    },
    [calculatePosition]
  );

  // Listen for suggestion list change events
  useEffect(() => {
    const handleSuggestionsChange = (event: SuggestionChangeEvent) => {
      const { prevCount, currentCount } = event.detail;

      if (showSuggestions && suggestionsRef.current) {
        // Always force a position update when suggestions change
        // Use a direct timeout approach rather than nested requestAnimationFrames
        setTimeout(() => {
          if (suggestionsRef.current) {
            const height = suggestionsRef.current.getBoundingClientRect().height || 0;
            if (height > 0) {
              updatePosition(height);

              // Double-check the position after a short delay to ensure it's correct
              setTimeout(() => {
                if (suggestionsRef.current) {
                  const updatedHeight = suggestionsRef.current.getBoundingClientRect().height || 0;
                  if (updatedHeight > 0 && Math.abs(updatedHeight - height) > 1) {
                    updatePosition(updatedHeight);
                  }
                }
              }, 50);
            }
          }
        }, 10);
      }
    };

    window.addEventListener('suggestionsListChanged', handleSuggestionsChange as EventListener);
    return () => {
      window.removeEventListener(
        'suggestionsListChanged',
        handleSuggestionsChange as EventListener
      );
    };
  }, [showSuggestions, suggestionsRef, updatePosition]);

  // Listen for resize events with higher priority
  useEffect(() => {
    const handleResize = (event: DropdownResizeEvent) => {
      const { height } = event.detail;
      if (height > 0) {
        // Ensure consistent behavior by always updating
        setTimeout(() => {
          updatePosition(height);
        }, 10);
      }
    };

    window.addEventListener('dropdownResized', handleResize as EventListener);
    return () => {
      window.removeEventListener('dropdownResized', handleResize as EventListener);
    };
  }, [updatePosition]);

  // Update initial position when dropdown becomes visible
  useEffect(() => {
    if (showSuggestions && suggestionsRef.current) {
      // Use the same direct approach for consistency
      setTimeout(() => {
        if (suggestionsRef.current) {
          const height = suggestionsRef.current.getBoundingClientRect().height || 0;
          if (height > 0) {
            updatePosition(height);

            // Double-check after a short delay
            setTimeout(() => {
              if (suggestionsRef.current) {
                const updatedHeight = suggestionsRef.current.getBoundingClientRect().height || 0;
                if (updatedHeight > 0 && Math.abs(updatedHeight - height) > 1) {
                  updatePosition(updatedHeight);
                }
              }
            }, 50);
          }
        }
      }, 10);
    }
  }, [showSuggestions, suggestionsRef, updatePosition]);

  return { getDropdownPosition: () => position, dropdownHeight };
};
