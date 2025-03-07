import { RefObject, useEffect } from 'react';

/**
 * Hook to handle scrolling to keep the selected suggestion in view
 */
export const useSuggestionScroll = (
  containerRef: RefObject<HTMLElement>,
  selectedIndex: number,
  itemSelector: string,
  itemCount: number,
  active: boolean
): void => {
  useEffect(() => {
    // Skip if not active, no container, or no items
    if (!active || !containerRef.current || itemCount === 0) return;
    
    // Find the currently selected item
    const selectedItem = containerRef.current.querySelector(`${itemSelector}[data-index="${selectedIndex}"]`);
    if (!selectedItem) return;
    
    // Calculate if the item is in view
    const containerRect = containerRef.current.getBoundingClientRect();
    const selectedItemRect = selectedItem.getBoundingClientRect();
    
    // Check if the item is outside the visible area
    const isAbove = selectedItemRect.top < containerRect.top;
    const isBelow = selectedItemRect.bottom > containerRect.bottom;
    
    // Scroll to make the item visible
    if (isAbove) {
      // Scroll so the item is at the top
      containerRef.current.scrollTop += selectedItemRect.top - containerRect.top;
    } else if (isBelow) {
      // Scroll so the item is at the bottom
      containerRef.current.scrollTop += selectedItemRect.bottom - containerRect.bottom;
    }
  }, [containerRef, selectedIndex, itemSelector, itemCount, active]);
}; 