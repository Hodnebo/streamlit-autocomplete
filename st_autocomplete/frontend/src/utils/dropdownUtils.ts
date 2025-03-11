import { RefObject } from 'react';

interface DropdownPosition {
  top: string;
  left: string;
  width: string;
}

/**
 * Calculate dropdown position based on input reference, dropdown height, and direction
 */
export const calculateDropdownPosition = (
  inputRef: RefObject<HTMLInputElement>,
  dropdownHeight: number,
  dropdownDirection: string = 'down'
): DropdownPosition => {
  if (!inputRef.current) {
    return dropdownDirection === 'up'
      ? { top: '0px', left: '0px', width: '100%' }
      : { top: '100%', left: '0', width: '100%' };
  }

  // Get input position
  const rect = inputRef.current.getBoundingClientRect();

  // For upward dropdowns in an iframe, adjust coordinates
  let top = rect.top;
  let left = rect.left;

  try {
    if (window !== window.parent && dropdownDirection === 'up') {
      const iframes = window.parent.document.querySelectorAll('iframe');
      for (let i = 0; i < iframes.length; i++) {
        try {
          if (iframes[i].contentWindow === window) {
            const iframeRect = iframes[i].getBoundingClientRect();
            top += iframeRect.top;
            left += iframeRect.left;
            break;
          }
        } catch (e) {
          /* Ignore access errors */
        }
      }
    }
  } catch (e) {
    console.error('Error calculating position:', e);
  }

  if (dropdownDirection === 'up') {
    // For 'up' direction, position directly above the input with a safety margin
    return {
      top: Math.max(0, top - dropdownHeight - 2) + 'px', // Position above input with 2px buffer
      left: left + 'px',
      width: rect.width + 'px',
    };
  } else {
    // For 'down' direction, position directly below the input
    return {
      top: '100%',
      left: '0',
      width: '100%',
    };
  }
};

/**
 * Measure the height of an element
 */
export const measureElementHeight = (element: HTMLElement | null): number => {
  if (!element) return 0;
  return element.getBoundingClientRect().height || 0;
};

/**
 * Dispatch a dropdown resize event
 */
export const dispatchDropdownResizeEvent = (width: number, height: number): void => {
  window.dispatchEvent(
    new CustomEvent('dropdownResized', {
      detail: { width, height },
    })
  );
};
