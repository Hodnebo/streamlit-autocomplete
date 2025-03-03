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
  
  // Extract props with defaults
  const {
    label = "",
    value = "",
    trigger_chars = ["#", "@"],
    suggestions = {},
    debounce = null,
    placeholder = "",
    disabled = false,
    label_visibility = "visible",
    position = "static",
    width = "100%",
    dropdown_direction = "down",
    update_on_change = true,
    on_submit = false,
    tag_styles = {}
  } = props.args;
  
  // Track rendered status for safe effect handling
  const [isRendered, setIsRendered] = useState(false);

  // Setup hooks
  const { 
    value: inputValue, 
    cursorPosition,
    handleChange, 
    handleSubmit,
    setValueAndCursor 
  } = useInputValue(value, debounce, update_on_change);
  
  const {
    showSuggestions,
    activeSuggestions,
    selectedSuggestionIndex,
    setSelectedSuggestionIndex,
    handleSuggestionClick,
    handleKeyNavigation,
    searchQuery
  } = useSuggestions(inputValue, cursorPosition, trigger_chars, suggestions);
  
  const { getDropdownPosition } = useDropdownPosition(
    inputRef, 
    suggestionsRef, 
    showSuggestions, 
    dropdown_direction
  );
  
  // Manage component height to accommodate dropdown
  useComponentHeight(
    containerRef, 
    suggestionsRef, 
    showSuggestions, 
    dropdown_direction
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
    if (e.key === "Enter" && on_submit && !showSuggestions) {
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
    if (label_visibility === "hidden" || label_visibility === "collapsed") {
      return null;
    }
    return (
      <label 
        htmlFor="autocomplete-input"
        style={getLabelStyles(label_visibility)}
      >
        {label}
      </label>
    );
  };

  return (
    <div 
      ref={containerRef} 
      style={getContainerStyles(position, width)}
    >
      {renderLabel()}
      
      <StyledInput
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        style={getInputStyles()}
        tagStyles={tag_styles}
        triggerChars={trigger_chars}
      />
      
      <DropdownPortal
        showSuggestions={showSuggestions && isRendered && !disabled}
        suggestionsRef={suggestionsRef}
        dropdownDirection={dropdown_direction}
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