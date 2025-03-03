import React, { useRef, useEffect, useState, forwardRef } from 'react';

interface StyledInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  tagStyles?: Record<string, { backgroundColor?: string; color?: string }>;
  triggerChars?: string[];
}

interface Tag {
  text: string;
  triggerChar: string;
  start: number;
  end: number;
}

/**
 * Component to render an input field with styled tags
 */
const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(({
  value,
  onChange,
  onKeyDown,
  placeholder,
  disabled,
  style,
  tagStyles = {},
  triggerChars = ['@', '#']
}, ref) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  // Forward the ref to access input element operations
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(inputRef.current);
      } else {
        ref.current = inputRef.current;
      }
    }
  }, [ref]);

  // Detect tags in the input value
  useEffect(() => {
    const detectedTags: Tag[] = [];
    
    // Look for pattern: trigger char + text + zero-width space
    let currentIndex = 0;
    
    while (currentIndex < value.length) {
      // Find the next trigger character
      // eslint-disable-next-line no-loop-func
      const triggerCharIndex = triggerChars.reduce((closestIndex, char) => {
        const index = value.indexOf(char, currentIndex);
        if (index !== -1 && (closestIndex === -1 || index < closestIndex)) {
          return index;
        }
        return closestIndex;
      }, -1);
      
      // If no more trigger characters are found, exit the loop
      if (triggerCharIndex === -1) break;
      
      // Find the zero-width space after the trigger character
      const zeroWidthSpaceIndex = value.indexOf('\u200B', triggerCharIndex);
      if (zeroWidthSpaceIndex !== -1) {
        // This is a completed tag
        const tagText = value.substring(triggerCharIndex, zeroWidthSpaceIndex + 1);
        const triggerChar = value[triggerCharIndex];
        
        detectedTags.push({
          text: tagText,
          triggerChar,
          start: triggerCharIndex,
          end: zeroWidthSpaceIndex + 1
        });
        
        // Move to after this tag
        currentIndex = zeroWidthSpaceIndex + 1;
      } else {
        // Just a trigger character without completion, skip it
        currentIndex = triggerCharIndex + 1;
      }
    }
    
    setTags(detectedTags);
  }, [value, triggerChars]);
  
  // Extract all important styles to ensure exact parity between input and overlay
  const extractStyles = () => {
    const defaultStyles = {
      padding: '0.5rem',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      border: '1px solid #ccc',
      borderRadius: '0.25rem',
    };
    
    const combinedStyles = {
      ...defaultStyles,
      ...style,
    };
    
    return {
      padding: combinedStyles.padding,
      fontFamily: combinedStyles.fontFamily,
      fontSize: combinedStyles.fontSize, 
      lineHeight: combinedStyles.lineHeight,
      letterSpacing: combinedStyles.letterSpacing,
      fontWeight: combinedStyles.fontWeight,
      border: combinedStyles.border,
      borderRadius: combinedStyles.borderRadius,
    };
  };
  
  const extractedStyles = extractStyles();
  
  // Base styles that will be shared between real input and overlay
  const sharedStyles: React.CSSProperties = {
    ...extractedStyles,
    boxSizing: 'border-box',
    width: '100%',
  };
  
  const baseInputStyle: React.CSSProperties = {
    ...sharedStyles,
    background: 'transparent',
    color: 'transparent',
    caretColor: 'black', // Make cursor visible
    position: 'relative',
    zIndex: 1,
    ...style, // Apply custom styles
    // Override with extracted styles to ensure consistency
    ...extractedStyles,
  };
  
  const overlayStyle: React.CSSProperties = {
    ...sharedStyles,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    whiteSpace: 'pre',
    borderColor: 'transparent',
    // Same z-index as input so they are perfectly aligned
    zIndex: 1,
  };

  // Create the styled content
  const renderStyledContent = () => {
    if (!value) {
      return <span style={{ color: '#999' }}>{placeholder}</span>;
    }
    
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Sort tags by start position
    const sortedTags = [...tags].sort((a, b) => a.start - b.start);
    
    for (const tag of sortedTags) {
      // Add text before this tag
      if (tag.start > lastIndex) {
        parts.push(<span key={`text-${lastIndex}`}>{value.substring(lastIndex, tag.start)}</span>);
      }
      
      // Add the styled tag (without the zero-width space)
      const visibleTagText = value.substring(tag.start, tag.end - 1); // Remove zero-width space
      const tagStyle = tagStyles[tag.triggerChar] || { backgroundColor: '#e8f0fe', color: '#1a73e8' };
      
      parts.push(
        <span 
          key={`tag-${tag.start}`}
          style={{
            backgroundColor: tagStyle.backgroundColor,
            color: tagStyle.color,
            borderRadius: '3px'
          }}
        >
          {visibleTagText}
        </span>
      );
      
      lastIndex = tag.end;
    }
    
    // Add any remaining text
    if (lastIndex < value.length) {
      parts.push(<span key={`text-${lastIndex}`}>{value.substring(lastIndex)}</span>);
    }
    
    return parts;
  };

  // Handle special key events to maintain cursor position after rendering
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Call the original onKeyDown handler
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        style={baseInputStyle}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      <div style={overlayStyle}>
        {renderStyledContent()}
      </div>
    </div>
  );
});

export default StyledInput; 