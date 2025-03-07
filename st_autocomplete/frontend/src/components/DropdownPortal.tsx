import React, { RefObject, useEffect, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { getPortalContainer } from '../utils/domUtils';
import SuggestionsList from './SuggestionsList';

export interface DropdownPortalProps {
  showSuggestions: boolean;
  suggestionsRef: RefObject<HTMLDivElement>;
  dropdownDirection: string;
  position: { top: string; left: string; width: string };
  activeSuggestions: string[];
  selectedSuggestionIndex: number;
  onSelect: (suggestion: string) => void;
  onHover: (index: number) => void;
  searchQuery?: string;
}

/**
 * Component for rendering suggestion dropdowns, with portal support for 'up' direction
 */
const DropdownPortal: React.FC<DropdownPortalProps> = (props: DropdownPortalProps) => {
  // Create a ref to the active suggestion item
  const selectedItemRef = useRef<HTMLDivElement | null>(null);
  const prevSuggestionsLength = useRef<number>(props.activeSuggestions.length);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  
  // Effect to scroll the dropdown to keep the selected item in view
  useEffect(() => {
    if (!props.showSuggestions || !props.suggestionsRef.current || props.activeSuggestions.length === 0) return;
    
    // Find the currently selected item
    const selectedItem = props.suggestionsRef.current.querySelector(`.suggestion-item[data-index="${props.selectedSuggestionIndex}"]`);
    if (!selectedItem) return;
    
    // Store a reference to the selected item
    selectedItemRef.current = selectedItem as HTMLDivElement;
    
    // Calculate if the item is in view
    const dropdownRect = props.suggestionsRef.current.getBoundingClientRect();
    const selectedItemRect = selectedItem.getBoundingClientRect();
    
    // Check if the item is outside the visible area
    const isAbove = selectedItemRect.top < dropdownRect.top;
    const isBelow = selectedItemRect.bottom > dropdownRect.bottom;
    
    // Scroll to make the item visible
    if (isAbove) {
      // Scroll so the item is at the top
      props.suggestionsRef.current.scrollTop += selectedItemRect.top - dropdownRect.top;
    } else if (isBelow) {
      // Scroll so the item is at the bottom
      props.suggestionsRef.current.scrollTop += selectedItemRect.bottom - dropdownRect.bottom;
    }
    
  }, [props.selectedSuggestionIndex, props.activeSuggestions, props.suggestionsRef, props.showSuggestions]);
  
  // Track changes in the suggestions list length
  useEffect(() => {
    // Check if the number of suggestions changed
    if (prevSuggestionsLength.current !== props.activeSuggestions.length) {
      prevSuggestionsLength.current = props.activeSuggestions.length;
      
      // Force a reflow/layout calculation
      if (props.suggestionsRef.current) {
        // This will trigger a reflow
        void props.suggestionsRef.current.getBoundingClientRect();
      }
      
      // Dispatch a custom event that useDropdownPosition can listen for
      const event = new CustomEvent('suggestionsListChanged', {
        detail: { count: props.activeSuggestions.length }
      });
      window.dispatchEvent(event);
    }
  }, [props.activeSuggestions.length, props.suggestionsRef]);
  
  // Set up resize observer to detect content size changes
  useEffect(() => {
    // Skip if no support or already set up
    if (!window.ResizeObserver || !props.suggestionsRef.current || resizeObserverRef.current) return;
    
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        // Trigger a custom event with the new size
        window.dispatchEvent(new CustomEvent('dropdownResized', {
          detail: { height: entry.contentRect.height }
        }));
      }
    });
    
    // Store the observer
    resizeObserverRef.current = observer;
    
    // Setup observer
    if (props.showSuggestions && props.suggestionsRef.current) {
      observer.observe(props.suggestionsRef.current);
    }
    
    // Cleanup
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
    };
  }, [props.showSuggestions, props.suggestionsRef]);

  if (!props.showSuggestions) return null;

  const dropdownContent = (
    <div
      ref={props.suggestionsRef}
      className="suggestions-dropdown"
      data-direction={props.dropdownDirection}
      data-suggestion-count={props.activeSuggestions.length}
      style={{
        position: "absolute",
        top: props.position.top,
        bottom: 'auto',
        left: props.position.left,
        width: props.position.width,
        maxHeight: "300px",
        overflowY: "auto",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 10000,
        margin: props.dropdownDirection === 'down' ? '0.25rem 0 0 0' : '0 0 0.25rem 0'
      }}
    >
      <SuggestionsList
        suggestions={props.activeSuggestions}
        selectedIndex={props.selectedSuggestionIndex}
        onSelect={props.onSelect}
        onHover={props.onHover}
        searchQuery={props.searchQuery}
      />
    </div>
  );

  // Use portal for 'up' direction to ensure visibility
  return props.dropdownDirection === 'up'
    ? ReactDOM.createPortal(dropdownContent, getPortalContainer())
    : dropdownContent;
};

export default DropdownPortal; 