import React, { RefObject, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { getPortalContainer } from '../utils/domUtils';
import SuggestionsList from './SuggestionsList';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { useSuggestionsChangeDetector } from '../hooks/useSuggestionsChangeDetector';
import { useSuggestionScroll } from '../hooks/useSuggestionScroll';

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

  useSuggestionsChangeDetector(
    props.activeSuggestions.length,
    useCallback((prevCount, currentCount) => {
      // Only force reflow when count changes significantly
      // Most critical when count decreases (dropdown gets smaller)
      if (currentCount < prevCount && props.suggestionsRef.current) {
        // This will trigger a reflow to ensure proper positioning after height change
        void props.suggestionsRef.current.getBoundingClientRect();
      }
    }, [props.suggestionsRef])
  );
  
  // Observe size changes in the dropdown
  useResizeObserver(
    props.suggestionsRef as RefObject<HTMLElement>,
    useCallback((width, height) => {
      // Notify of size change via custom event
      window.dispatchEvent(new CustomEvent('dropdownResized', {
        detail: { width, height }
      }));
    }, []),
    props.showSuggestions
  );
  
  // Handle scrolling to keep selected item in view
  useSuggestionScroll(
    props.suggestionsRef as RefObject<HTMLElement>,
    props.selectedSuggestionIndex,
    '.suggestion-item',
    props.activeSuggestions.length,
    props.showSuggestions
  );

  // Don't render anything if suggestions shouldn't be shown
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