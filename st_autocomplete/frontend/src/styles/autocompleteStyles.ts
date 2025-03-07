import { CSSProperties } from 'react';

/**
 * Get container styles based on position
 */
export const getContainerStyles = (position: string, width: string): CSSProperties => {
  const baseStyles: CSSProperties = {
    fontFamily: 'sans-serif',
    position: 'relative',
    width: width,
    minHeight: '60px',
    zIndex: 1,
  };

  if (position === 'bottom') {
    return {
      ...baseStyles,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '10px',
      backgroundColor: 'white',
      borderTop: '1px solid #e6e6e6',
      zIndex: 1000,
      width: '100%',
    };
  }

  return baseStyles;
};

/**
 * Get label styles based on visibility setting
 */
export const getLabelStyles = (labelVisibility: string): CSSProperties => {
  return {
    display: labelVisibility === 'hidden' ? 'none' : 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
  };
};

/**
 * Get input field styles
 */
export const getInputStyles = (): CSSProperties => {
  return {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };
};
