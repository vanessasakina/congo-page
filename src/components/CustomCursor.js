// class to display cursor on the page

import React, { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      setTimeout(() => {
        cursorTrail.style.left = `${x}px`;
        cursorTrail.style.top = `${y}px`;
      }, 50);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef}></div>
      <div id="cursor-trail" ref={cursorTrailRef}></div>
    </>
  );
}

export default CustomCursor;