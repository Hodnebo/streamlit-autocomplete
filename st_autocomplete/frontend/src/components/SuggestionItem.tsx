import React from "react";
import { SuggestionItemProps } from "../types/index";

/**
 * Helper function to highlight matching text
 */
const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query || query.trim() === '') {
    return text;
  }

  // Create normalized versions for matching
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');
  
  // If there's no match at all in the normalized version, return the text as is
  if (!normalizedText.replace(/\s+/g, '').includes(normalizedQuery)) {
    return text;
  }

  // Try different matching strategies
  
  // First, try exact match with spaces
  const exactIndex = normalizedText.indexOf(query.toLowerCase());
  if (exactIndex >= 0) {
    const before = text.substring(0, exactIndex);
    const match = text.substring(exactIndex, exactIndex + query.length);
    const after = text.substring(exactIndex + query.length);
    
    return (
      <>
        {before}
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{match}</span>
        {after}
      </>
    );
  }
  
  // Next, try character sequence without spaces (more complex highlighting)
  // This is a simple implementation that highlights where multiple consecutive chars match
  const parts = [];
  let currentIndex = 0;
  
  const textWithoutSpaces = text.replace(/\s+/g, '');
  const textLowerNoSpaces = textWithoutSpaces.toLowerCase();
  
  for (let i = 0; i < textLowerNoSpaces.length; i++) {
    if (i + normalizedQuery.length <= textLowerNoSpaces.length) {
      const segment = textLowerNoSpaces.substring(i, i + normalizedQuery.length);
      
      if (segment === normalizedQuery) {
        // Find the original text (with spaces) that corresponds to this match
        let charCount = 0;
        let originalStart = 0;
        let originalEnd = text.length;
        
        for (let j = 0; j < text.length; j++) {
          if (!/\s/.test(text[j])) {
            if (charCount === i) {
              originalStart = j;
            }
            if (charCount === i + normalizedQuery.length) {
              originalEnd = j;
              break;
            }
            charCount++;
          }
        }
        
        // Add the text before the match
        if (currentIndex < originalStart) {
          parts.push(text.substring(currentIndex, originalStart));
        }
        
        // Add the highlighted match
        parts.push(
          <span key={i} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {text.substring(originalStart, originalEnd)}
          </span>
        );
        
        currentIndex = originalEnd;
        break; // Only highlight the first match
      }
    }
  }
  
  // Add any remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? <>{parts}</> : text;
};

/**
 * Component for rendering a single suggestion item
 */
const SuggestionItem: React.FC<SuggestionItemProps> = ({
  suggestion,
  isActive,
  onClick,
  onMouseEnter,
  isLast,
  index,
  searchQuery
}) => (
  <div
    key={suggestion}
    className="suggestion-item"
    data-index={index}
    onClick={() => onClick(suggestion)}
    style={{
      padding: "0.75rem",
      cursor: "pointer",
      backgroundColor: isActive ? "#e6f7ff" : "white",
      color: isActive ? "#0066cc" : "#333333",
      borderBottom: isLast ? "none" : "1px solid #eee",
      transition: "background-color 0.2s ease",
      fontWeight: isActive ? "500" : "normal",
      fontSize: "0.95rem",
      display: "block",
      width: "100%",
      textAlign: "left",
      boxSizing: "border-box"
    }}
    onMouseEnter={onMouseEnter}
  >
    {searchQuery ? highlightMatch(suggestion, searchQuery) : suggestion}
  </div>
);

export default SuggestionItem; 