import React, { useRef, useEffect } from 'react';

const CursorFollower = () => {
  const mainCursorRef = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    // MouseMove FOLLOWER --
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      // Main Cursor:
      const mouseX = clientX;
      const mouseY = clientY;

      mainCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // PositionRef
      positionRef.current.mouseX =
        mouseX - mainCursorRef.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - mainCursorRef.current.clientHeight / 2;
    });

    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      // Starting to Move mouse
      if (!destinationX | !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      mainCursorRef.current.style.transform = ` translate3d(${destinationX}px, ${destinationY}px, 0) `;
    };
    followMouse();
  }, []);

  return (
    <>
      <div className='cursor' ref={mainCursorRef}></div>
    </>
  );
};

export default CursorFollower;
