import React, { useState, useEffect } from 'react';

export const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('use effect called');
    window.addEventListener('mousemove', logMousePosition);
  }, []);
  return (
    <div>
      Hook x {x} and Y {y}
    </div>
  );
};
