import { RefObject, useEffect, useRef } from 'react';

interface ResizeHandler {
  (width: number, height: number): void;
}

/**
 * Hook that observes an element's size changes using ResizeObserver
 */
export const useResizeObserver = (
  elementRef: RefObject<HTMLElement>,
  onResize: ResizeHandler,
  active: boolean = true
): void => {
  const observerRef = useRef<ResizeObserver | null>(null);
  const handlerRef = useRef(onResize);

  // Update handler ref when callback changes
  useEffect(() => {
    handlerRef.current = onResize;
  }, [onResize]);

  // Create and manage the ResizeObserver
  useEffect(() => {
    // Skip if no ResizeObserver support, no ref, or not active
    if (!window.ResizeObserver || !elementRef.current || !active) return;

    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Create a new ResizeObserver
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        handlerRef.current(width, height);
      }
    });

    // Start observing
    observer.observe(elementRef.current);
    observerRef.current = observer;

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [elementRef, active]);
};
