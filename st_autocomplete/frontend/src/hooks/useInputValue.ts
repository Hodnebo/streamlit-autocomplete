import { useCallback, useState } from 'react';
import { Streamlit } from 'streamlit-component-lib';

/**
 * Hook to manage input value changes
 */
export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue || '');
  const [cursorPosition, setCursorPosition] = useState(0);

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
        submitted: true,
      });

      // Clear the input after submission
      setValue('');
      setCursorPosition(0);
    }
  }, [value]);

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
    setValueAndCursor,
    sendValueToStreamlit,
  };
};
