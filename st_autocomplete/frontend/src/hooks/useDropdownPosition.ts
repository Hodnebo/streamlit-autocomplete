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
      // For 'up' direction, position directly above the input
      return {
        top: top - dropdownHeight + 'px', // Position above input
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
      // Only update if height has actually changed
      if (height !== lastHeightRef.current) {
        lastHeightRef.current = height;
        setDropdownHeight(height);
        setPosition(calculatePosition());
      }
    },
    [calculatePosition]
  );

  // Listen for suggestion list change events
  useEffect(() => {
    const handleSuggestionsChange = (event: SuggestionChangeEvent) => {
      if (showSuggestions && suggestionsRef.current) {
        // Force a small delay to allow the DOM to update
        requestAnimationFrame(() => {
          // Add a second frame request to ensure the DOM has fully updated
          // This is especially important when the list is growing
          requestAnimationFrame(() => {
            const height = suggestionsRef.current?.getBoundingClientRect().height || 0;
            if (height > 0) {
              updatePosition(height);
            }
          });
        });
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

  // Listen for resize events
  useEffect(() => {
    const handleResize = (event: DropdownResizeEvent) => {
      const { height } = event.detail;
      if (height > 0) {
        updatePosition(height);
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
      // Need a short delay to ensure DOM has updated
      requestAnimationFrame(() => {
        const height = suggestionsRef.current?.getBoundingClientRect().height || 0;
        if (height > 0) {
          updatePosition(height);
        }
      });
    }
  }, [showSuggestions, suggestionsRef, updatePosition]);

  return { getDropdownPosition: () => position, dropdownHeight };
};
