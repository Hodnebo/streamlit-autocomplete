import { useEffect, RefObject } from 'react';
import { Streamlit } from 'streamlit-component-lib';

/**
 * Hook to manage the component height and ensure correct iframe sizing
 */
export const useComponentHeight = (
  containerRef: RefObject<HTMLDivElement>,
  suggestionsRef: RefObject<HTMLDivElement>,
  showSuggestions: boolean,
  dropdownDirection: string
) => {
  // Initialize component height with a minimum value
  useEffect(() => {
    Streamlit.setFrameHeight(60);
  }, []);

  // Update component height when suggestions visibility changes or after render
  useEffect(() => {
    // Calculate the height based on the container's height
    if (containerRef.current) {
      let height = containerRef.current.offsetHeight;
      
      // If suggestions are visible, add extra height to accommodate them (only for 'down' direction)
      if (showSuggestions && suggestionsRef.current && dropdownDirection === 'down') {
        const suggestionsHeight = Math.min(suggestionsRef.current.scrollHeight, 300);
        height += suggestionsHeight + 10; // Add some padding
      }
      
      // Ensure a minimum height
      Streamlit.setFrameHeight(Math.max(height, 60));
    } else {
      Streamlit.setFrameHeight(60);
    }
  }, [showSuggestions, containerRef, suggestionsRef, dropdownDirection]);
}; 