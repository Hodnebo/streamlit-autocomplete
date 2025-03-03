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
  
  // Update dropdown height when suggestions change
  useEffect(() => {
    if (suggestionsRef.current && showSuggestions) {
      // Get the current height of the suggestions list
      const height = suggestionsRef.current.getBoundingClientRect().height;
      setDropdownHeight(height);
      
      // Recalculate position with the new height
      setPosition(calculatePosition());
    }
  }, [showSuggestions, suggestionsRef, calculatePosition]);
  
  // Force position update when dropdown visibility changes
  useEffect(() => {
    if (showSuggestions) {
      setPosition(calculatePosition());
    }
  }, [showSuggestions, calculatePosition]);

  return { getDropdownPosition: () => position, dropdownHeight };
}; 