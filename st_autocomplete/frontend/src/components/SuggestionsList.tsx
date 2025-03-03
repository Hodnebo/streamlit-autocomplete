import React from "react";
import { SuggestionsListProps } from "../types/index";
import SuggestionItem from "./SuggestionItem";

/**
 * Component for rendering a list of suggestions
 */
const SuggestionsList: React.FC<SuggestionsListProps> = ({ 
  suggestions, 
  selectedIndex, 
  onSelect, 
  onHover,
  searchQuery
}) => {
  if (suggestions.length === 0) {
    return (
      <div style={{ 
        padding: "0.75rem", 
        color: "#666", 
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "0.95rem",
        zIndex: 10001
      }}>
        No matching suggestions
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: "white", 
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      zIndex: 10001,
      position: "relative"
    }}>
      {suggestions.map((suggestion: string, index: number) => (
        <SuggestionItem
          key={suggestion}
          suggestion={suggestion}
          isActive={index === selectedIndex}
          onClick={onSelect}
          onMouseEnter={() => onHover(index)}
          isLast={index === suggestions.length - 1}
          index={index}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
};

export default SuggestionsList; 