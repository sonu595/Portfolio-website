import { useEffect, useRef, useCallback } from 'react';

const useCursor = (options = {}) => {
  const {
    selector = '.hover-text',
    defaultWidth = '30px',
    defaultHeight = '30px',
    transitionDuration = '0.2s'
  } = options;

  const isHoveringRef = useRef(false);
  const cursorRef = useRef(null);
  const cleanupRef = useRef([]);

  // Get or create cursor element
  const getCursor = useCallback(() => {
    if (cursorRef.current) return cursorRef.current;
    
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      document.body.appendChild(cursor);
    }
    cursorRef.current = cursor;
    return cursor;
  }, []);

  // Move cursor function
  const moveCursor = useCallback((e) => {
    const cursor = getCursor();
    if (!isHoveringRef.current) {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    }
  }, [getCursor]);

  // Handle hover enter
  const handleHoverEnter = useCallback((element) => {
    const cursor = getCursor();
    const rect = element.getBoundingClientRect();
    
    isHoveringRef.current = true;
    cursor.classList.add('active');
    cursor.style.width = `${rect.width}px`;
    cursor.style.height = `${rect.height}px`;
    cursor.style.transition = `width ${transitionDuration} ease, height ${transitionDuration} ease, top ${transitionDuration} ease, left ${transitionDuration} ease`;
    cursor.style.top = `${rect.top + rect.height / 2}px`;
    cursor.style.left = `${rect.left + rect.width / 2}px`;
  }, [getCursor, transitionDuration]);

  // Handle hover leave
  const handleHoverLeave = useCallback(() => {
    const cursor = getCursor();
    
    isHoveringRef.current = false;
    cursor.classList.remove('active');
    cursor.style.transition = '';
    cursor.style.width = defaultWidth;
    cursor.style.height = defaultHeight;
  }, [getCursor, defaultWidth, defaultHeight]);

  // Setup hover listeners
  const setupHoverListeners = useCallback(() => {
    const cursor = getCursor();
    if (!cursor) return;

    const elements = document.querySelectorAll(selector);
    const handlers = [];

    elements.forEach((el) => {
      const handleEnter = () => handleHoverEnter(el);
      const handleLeave = () => handleHoverLeave();

      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
      
      handlers.push({ el, handleEnter, handleLeave });
    });

    // Cleanup previous handlers
    cleanupRef.current.forEach(({ el, handleEnter, handleLeave }) => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    });

    cleanupRef.current = handlers;
  }, [selector, getCursor, handleHoverEnter, handleHoverLeave]);

  // Main effect
  useEffect(() => {
    const cursor = getCursor();
    if (!cursor) return;

    // Setup cursor movement
    document.addEventListener('mousemove', moveCursor);

    // Setup hover listeners
    setupHoverListeners();

    // Watch for DOM changes (for dynamic elements)
    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      
      cleanupRef.current.forEach(({ el, handleEnter, handleLeave }) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [moveCursor, setupHoverListeners, getCursor]);

  return { isHoveringRef, cursorRef };
};

export default useCursor;