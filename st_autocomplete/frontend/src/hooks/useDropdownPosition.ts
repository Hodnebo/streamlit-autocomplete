import { RefObject, useState, useEffect, useCallback } from 'react';

interface DropdownPosition {
  top: string;
  left: string;
  width: string;
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
    width: '100%'
  });
  
  // Calculate dropdown position based on direction
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
          } catch (e) { /* Ignore access errors */ }
        }
      }
    } catch (e) { console.error('Error calculating position:', e); }
    
    if (dropdownDirection === 'up') {
      // For 'up' direction, position directly above the input
      // Calculate with the current known dropdown height
      return {
        top: (top - dropdownHeight) + 'px', // Position above input
        left: left + 'px',
        width: rect.width + 'px'
      };
    } else {
      // For 'down' direction, position directly below the input
      return {
        top: '100%',
        left: '0',
        width: '100%'
      };
    }
  }, [dropdownDirection, dropdownHeight, inputRef]);
  
  // Listen for changes in the suggestions list and recalculate position
  useEffect(() => {
    const handleSuggestionsChange = (event: CustomEvent) => {
      if (showSuggestions && suggestionsRef.current) {
        // Force a small delay to allow the DOM to update
        requestAnimationFrame(() => {
          const height = suggestionsRef.current?.getBoundingClientRect().height || 0;
          if (height > 0 && height !== dropdownHeight) {
            setDropdownHeight(height);
            setPosition(calculatePosition());
          }
        });
      }
    };
    
    const handleDropdownResize = (event: CustomEvent) => {
      const height = event.detail?.height;
      if (height && height !== dropdownHeight) {
        setDropdownHeight(height);
        setPosition(calculatePosition());
      }
    };
    
    // Add event listeners
    window.addEventListener('suggestionsListChanged', handleSuggestionsChange as EventListener);
    window.addEventListener('dropdownResized', handleDropdownResize as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('suggestionsListChanged', handleSuggestionsChange as EventListener);
      window.removeEventListener('dropdownResized', handleDropdownResize as EventListener);
    };
  }, [showSuggestions, suggestionsRef, calculatePosition, dropdownHeight]);
  
  // Update dropdown height when suggestions ref changes or visibility changes
  useEffect(() => {
    if (suggestionsRef.current && showSuggestions) {
      // Need a short delay to ensure DOM has updated
      requestAnimationFrame(() => {
        const height = suggestionsRef.current?.getBoundingClientRect().height || 0;
        if (height > 0 && height !== dropdownHeight) {
          setDropdownHeight(height);
          setPosition(calculatePosition());
        }
      });
    }
  }, [showSuggestions, suggestionsRef, calculatePosition, dropdownHeight]);

  return { getDropdownPosition: () => position, dropdownHeight };
}; 