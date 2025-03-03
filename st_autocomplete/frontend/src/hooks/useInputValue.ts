import { useState, useCallback, useEffect, useRef } from 'react';
import { Streamlit } from 'streamlit-component-lib';

/**
 * Hook to manage input value changes with optional debouncing
 */
export const useInputValue = (
  initialValue: string, 
  debounceTime: number | null = null,
  updateOnChange: boolean = false
) => {
  const [value, setValue] = useState(initialValue || "");
  const [cursorPosition, setCursorPosition] = useState(0);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Update Streamlit with the current value
  const sendValueToStreamlit = useCallback((newValue: string) => {
    Streamlit.setComponentValue(newValue);
  }, []);

  // Submit the form value
  const handleSubmit = useCallback(() => {
    const trimmedValue = value.trim();
    
    // Only submit if there's a non-empty value
    if (trimmedValue) {
      // Send the value with a special submit flag
      Streamlit.setComponentValue({
        value: value,
        submitted: true
      });
      
      // Clear the input after submission
      setValue("");
      setCursorPosition(0);
    }
  }, [value]);

  // Handle debounced updates
  useEffect(() => {
    // Only update Streamlit on change if updateOnChange is true
    if (!updateOnChange) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (debounceTime) {
      debounceTimerRef.current = setTimeout(() => {
        if (value !== initialValue) {
          sendValueToStreamlit(value);
        }
      }, debounceTime);
    } else {
      if (value !== initialValue) {
        sendValueToStreamlit(value);
      }
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [value, debounceTime, sendValueToStreamlit, initialValue, updateOnChange]);

  // Handle input change
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  }, []);

  // Update value externally
  const setValueAndCursor = useCallback((newValue: string, newCursorPos: number) => {
    setValue(newValue);
    setCursorPosition(newCursorPos);
  }, []);

  return {
    value,
    cursorPosition,
    handleChange,
    handleSubmit,
    setValueAndCursor
  };
}; 