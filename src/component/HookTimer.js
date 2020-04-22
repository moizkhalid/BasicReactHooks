import React, { useState, useEffect, useRef } from 'react';

const HookTimer = () => {
  const [Timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
      console.log(intervalRef.current);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer {Timer}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Hook timer
      </button>
    </div>
  );
};

export default HookTimer;
