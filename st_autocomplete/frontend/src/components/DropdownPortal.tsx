import React, { RefObject, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { getPortalContainer } from '../utils/domUtils';
import SuggestionsList from './SuggestionsList';

interface DropdownPortalProps {
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
const DropdownPortal: React.FC<DropdownPortalProps> = ({
  showSuggestions,
  suggestionsRef,
  dropdownDirection,
  position,
  activeSuggestions,
  selectedSuggestionIndex,
  onSelect,
  onHover,
  searchQuery
}) => {
  // Create a ref to the active suggestion item
  const selectedItemRef = useRef<HTMLDivElement | null>(null);
  const prevSuggestionsLength = useRef<number>(activeSuggestions.length);
  
  // Effect to scroll the dropdown to keep the selected item in view
  useEffect(() => {
    if (!showSuggestions || !suggestionsRef.current || activeSuggestions.length === 0) return;
    
    // Find the currently selected item
    const selectedItem = suggestionsRef.current.querySelector(`.suggestion-item[data-index="${selectedSuggestionIndex}"]`);
    if (!selectedItem) return;
    
    // Store a reference to the selected item
    selectedItemRef.current = selectedItem as HTMLDivElement;
    
    // Calculate if the item is in view
    const dropdownRect = suggestionsRef.current.getBoundingClientRect();
    const selectedItemRect = selectedItem.getBoundingClientRect();
    
    // Check if the item is outside the visible area
    const isAbove = selectedItemRect.top < dropdownRect.top;
    const isBelow = selectedItemRect.bottom > dropdownRect.bottom;
    
    // Scroll to make the item visible
    if (isAbove) {
      // Scroll so the item is at the top
      suggestionsRef.current.scrollTop += selectedItemRect.top - dropdownRect.top;
    } else if (isBelow) {
      // Scroll so the item is at the bottom
      suggestionsRef.current.scrollTop += selectedItemRect.bottom - dropdownRect.bottom;
    }
    
    // Track changes in suggestions list length for recalculating position
    prevSuggestionsLength.current = activeSuggestions.length;
    
  }, [showSuggestions, selectedSuggestionIndex, activeSuggestions, suggestionsRef]);

  if (!showSuggestions) return null;

  const dropdownContent = (
    <div
      ref={suggestionsRef}
      className="suggestions-dropdown"
      data-direction={dropdownDirection}
      style={{
        position: dropdownDirection === 'up' ? 'fixed' : 'absolute',
        top: position.top,
        bottom: 'auto',
        left: position.left,
        width: position.width,
        maxHeight: "300px",
        overflowY: "auto",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: dropdownDirection === 'up' ? 10000 : 9999,
        margin: dropdownDirection === 'down' ? '0.25rem 0 0 0' : '0 0 0.25rem 0'
      }}
    >
      <SuggestionsList
        suggestions={activeSuggestions}
        selectedIndex={selectedSuggestionIndex}
        onSelect={onSelect}
        onHover={onHover}
        searchQuery={searchQuery}
      />
    </div>
  );

  // Use portal for 'up' direction to ensure visibility
  return dropdownDirection === 'up'
    ? ReactDOM.createPortal(dropdownContent, getPortalContainer())
    : dropdownContent;
};

export default DropdownPortal; 