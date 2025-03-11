import React, { RefObject } from 'react';
import ReactDOM from 'react-dom';
import { getPortalContainer } from '../utils/domUtils';
import SuggestionsList from './SuggestionsList';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { useSuggestionScroll } from '../hooks/useSuggestionScroll';
import { DropdownPortalProps } from '../types';
import { useSuggestionStateChange } from '../hooks/useSuggestionStateChange';
import { useSimplifiedDropdownPosition } from '../hooks/useSimplifiedDropdownPosition';
import { dispatchDropdownResizeEvent } from '../utils/dropdownUtils';

/**
 * Component for rendering suggestion dropdowns, with portal support for 'up' direction
 */
const DropdownPortal: React.FC<DropdownPortalProps> = (props: DropdownPortalProps) => {
  // Handle suggestion state changes
  useSuggestionStateChange(
    props.suggestionsRef as RefObject<HTMLElement>,
    props.activeSuggestions.length
  );

  // Get dropdown position
  const { position } = useSimplifiedDropdownPosition(
    props.inputRef,
    props.suggestionsRef,
    props.showSuggestions,
    props.dropdownDirection
  );

  // Observe size changes in the dropdown
  useResizeObserver(
    props.suggestionsRef as RefObject<HTMLElement>,
    (width, height) => {
      // Notify of size change via custom event
      dispatchDropdownResizeEvent(width, height);
    },
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
        position: 'absolute',
        top: position.top,
        bottom: 'auto',
        left: position.left,
        width: position.width,
        maxHeight: '300px',
        overflowY: 'auto',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.25rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 10000,
        margin: props.dropdownDirection === 'down' ? '0.25rem 0 0 0' : '0 0 0.25rem 0',
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
