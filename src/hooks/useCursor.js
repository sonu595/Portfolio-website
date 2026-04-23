import { useEffect, useRef, useCallback } from 'react';

const useCursor = (options = {}) => {
  const {
    selector = '.hover-text',
    defaultSize = '30px',
    transitionDuration = '0.2s',
  } = options;

  const isHoveringRef = useRef(false);
  const cursorRef = useRef(null);
  const listenersRef = useRef([]);

  // Create or get the cursor DOM element
  const getCursor = useCallback(() => {
    if (cursorRef.current) return cursorRef.current;
    let el = document.querySelector('.cursor');
    if (!el) {
      el = document.createElement('div');
      el.className = 'cursor';
      document.body.appendChild(el);
    }
    cursorRef.current = el;
    return el;
  }, []);

  // Follow mouse when not locked to an element
  const onMouseMove = useCallback((e) => {
    if (isHoveringRef.current) return;
    const cursor = getCursor();
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  }, [getCursor]);

  // Lock cursor onto hovered element
  const onEnter = useCallback((el) => {
    const cursor = getCursor();
    const rect = el.getBoundingClientRect();
    isHoveringRef.current = true;
    cursor.classList.add('active');
    cursor.style.transition = `width ${transitionDuration} ease, height ${transitionDuration} ease, top ${transitionDuration} ease, left ${transitionDuration} ease`;
    cursor.style.width = `${rect.width}px`;
    cursor.style.height = `${rect.height}px`;
    cursor.style.top = `${rect.top + rect.height / 2}px`;
    cursor.style.left = `${rect.left + rect.width / 2}px`;
  }, [getCursor, transitionDuration]);

  // Release cursor back to free movement
  const onLeave = useCallback(() => {
    const cursor = getCursor();
    isHoveringRef.current = false;
    cursor.classList.remove('active');
    cursor.style.transition = '';
    cursor.style.width = defaultSize;
    cursor.style.height = defaultSize;
  }, [getCursor, defaultSize]);

  // Attach mouseenter/mouseleave to all matching elements
  const attachListeners = useCallback(() => {
    // Remove old listeners first
    listenersRef.current.forEach(({ el, enter, leave }) => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });

    const elements = document.querySelectorAll(selector);
    listenersRef.current = [...elements].map((el) => {
      const enter = () => onEnter(el);
      const leave = () => onLeave();
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      return { el, enter, leave };
    });
  }, [selector, onEnter, onLeave]);

  useEffect(() => {
    getCursor();
    document.addEventListener('mousemove', onMouseMove);
    attachListeners();

    // Re-attach when DOM changes (e.g. after Intro unmounts)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      listenersRef.current.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [getCursor, onMouseMove, attachListeners]);

  return { isHoveringRef, cursorRef };
};

export default useCursor;