import React, { RefObject, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { getPortalContainer } from '../utils/domUtils';
import SuggestionsList from './SuggestionsList';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { useSuggestionsChangeDetector } from '../hooks/useSuggestionsChangeDetector';
import { useSuggestionScroll } from '../hooks/useSuggestionScroll';
import { DropdownPortalProps } from '../types';

/**
 * Component for rendering suggestion dropdowns, with portal support for 'up' direction
 */
const DropdownPortal: React.FC<DropdownPortalProps> = (props: DropdownPortalProps) => {
  useSuggestionsChangeDetector(
    props.activeSuggestions.length,
    useCallback(
      (prevCount, currentCount) => {
        // Trigger a reflow when count changes in either direction
        // This ensures proper positioning after height change
        if (prevCount !== currentCount && props.suggestionsRef.current) {
          // This will trigger a reflow to ensure proper positioning after height change
          void props.suggestionsRef.current.getBoundingClientRect();

          // Dispatch explicit resize event to ensure positioning is updated
          setTimeout(() => {
            if (props.suggestionsRef.current) {
              const rect = props.suggestionsRef.current.getBoundingClientRect();
              window.dispatchEvent(
                new CustomEvent('dropdownResized', {
                  detail: { width: rect.width, height: rect.height },
                })
              );
            }
          }, 50); // Add a slight delay to ensure DOM has updated
        }
      },
      [props.suggestionsRef]
    )
  );

  // Observe size changes in the dropdown
  useResizeObserver(
    props.suggestionsRef as RefObject<HTMLElement>,
    useCallback((width, height) => {
      // Notify of size change via custom event
      window.dispatchEvent(
        new CustomEvent('dropdownResized', {
          detail: { width, height },
        })
      );
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
        position: 'absolute',
        top: props.position.top,
        bottom: 'auto',
        left: props.position.left,
        width: props.position.width,
        maxHeight: '300px',
        overflowY: 'auto',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.25rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 10000,
        margin: props.dropdownDirection === 'down' ? '0.25rem 0 0 0' : '0 0 0.25rem 0',
        // Add a small transition to make position changes smoother
        transition: 'top 0.1s ease-out',
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
