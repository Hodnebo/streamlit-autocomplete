import React, { useRef, useEffect, useState } from "react";
import { Streamlit } from "streamlit-component-lib";
import type { AutocompleteProps } from "../types";
import DropdownPortal from "./DropdownPortal";
import { 
  getContainerStyles, 
  getLabelStyles, 
  getInputStyles 
} from "../styles/autocompleteStyles";
import { useInputValue } from "../hooks/useInputValue";
import { useSuggestions } from "../hooks/useSuggestions";
import { useDropdownPosition } from "../hooks/useDropdownPosition";
import { useComponentHeight } from "../hooks/useComponentHeight";
import { injectGlobalStyles } from "../utils/domUtils";
import StyledInput from "./StyledInput";

// Inject global styles for proper component visibility
const globalStylesElement = injectGlobalStyles();

export const Autocomplete: React.FC<AutocompleteProps> = (props: AutocompleteProps) => {
  // Reference to component elements
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  
  const args = props.args;
  
  // Track rendered status for safe effect handling
  const [isRendered, setIsRendered] = useState(false);

  const {
    value: inputValue, 
    cursorPosition,
    handleChange, 
    handleSubmit,
    setValueAndCursor 
  } = useInputValue(args.value, args.debounce, args.update_on_change);
  
  const {
    showSuggestions,
    activeSuggestions,
    selectedSuggestionIndex,
    setSelectedSuggestionIndex,
    handleSuggestionClick,
    handleKeyNavigation,
    searchQuery
  } = useSuggestions(inputValue, cursorPosition, args.trigger_chars, args.suggestions);
  
  const { getDropdownPosition } = useDropdownPosition(
    inputRef, 
    suggestionsRef, 
    showSuggestions, 
    args.dropdown_direction
  );
  
  // Manage component height to accommodate dropdown
  useComponentHeight(
    containerRef, 
    suggestionsRef, 
    showSuggestions, 
    args.dropdown_direction
  );
  
  // On first render, notify Streamlit that the component is ready
  useEffect(() => {
    if (isFirstRender.current) {
      Streamlit.setFrameHeight();
      isFirstRender.current = false;
      setIsRendered(true);
    }
    
    // Cleanup on unmount
    return () => {
      if (globalStylesElement) {
        globalStylesElement.remove();
      }
    };
  }, []);
  
  // Handle suggestion selection and apply it to the input
  const handleSuggestionSelected = (suggestion: string) => {
    const result = handleSuggestionClick(suggestion);
    if (!result) return;
    
    // Update the input value and cursor position
    setValueAndCursor(result.newValue, result.newCursorPos);
    
    // Wait for React to update the DOM, then focus and set cursor position
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(result.newCursorPos, result.newCursorPos);
      }
    }, 0);
  };
  
  // Handle hover on suggestion item
  const handleSuggestionHover = (index: number) => {
    setSelectedSuggestionIndex(index);
  };
  
  // Handle key events for keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle submission
    if (e.key === "Enter" && args.on_submit && !showSuggestions) {
      e.preventDefault();
      handleSubmit();
      return;
    }
    
    // Handle keyboard navigation of suggestions
    const result = handleKeyNavigation(e.key);
    
    if (result === true) {
      // Key was handled but no value update needed
      e.preventDefault();
      return;
    }
    
    if (result && typeof result === "object") {
      // Key was handled and we need to update the input value
      e.preventDefault();
      
      // Update the input value and cursor position
      setValueAndCursor(result.newValue, result.newCursorPos);
      
      // Wait for React to update the DOM, then focus and set cursor position
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(result.newCursorPos, result.newCursorPos);
        }
      }, 0);
    }
  };

  // Render the label if it's not hidden
  const renderLabel = () => {
    if (args.label_visibility === "hidden" || args.label_visibility === "collapsed") {
      return null;
    }
    return (
      <label 
        htmlFor="autocomplete-input"
        style={getLabelStyles(args.label_visibility)}
      >
        {args.label}
      </label>
    );
  };

  return (
    <div 
      ref={containerRef} 
      style={getContainerStyles(args.position, args.width)}
    >
      {renderLabel()}
      
      <StyledInput
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={args.placeholder}
        disabled={args.disabled}
        style={getInputStyles()}
        tagStyles={args.tag_styles}
        triggerChars={args.trigger_chars}
      />
      
      <DropdownPortal
        showSuggestions={showSuggestions && isRendered && !args.disabled}
        suggestionsRef={suggestionsRef}
        dropdownDirection={args.dropdown_direction}
        position={getDropdownPosition()}
        activeSuggestions={activeSuggestions}
        selectedSuggestionIndex={selectedSuggestionIndex}
        onSelect={handleSuggestionSelected}
        onHover={handleSuggestionHover}
        searchQuery={searchQuery}
      />
    </div>
  );
}; 