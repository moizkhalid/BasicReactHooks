import React, { useState, useMemo } from 'react';
function UseMemoCounter() {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  const incrementOne = () => {
    setCount1(Count1 + 1);
  };
  const incrementTwo = () => {
    setCount2(Count2 + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return Count1 % 2 === 0;
  }, [Count1]);

  return (
    <div>
      <h2>{Count1}</h2>
      <button onClick={incrementOne}>Increment Counter 1</button>
      <span>{isEven ? ' Even' : ' odd'}</span>
      <h2>{Count2}</h2>

      <button onClick={incrementTwo}>Increment Counter 2</button>
    </div>
  );
}

export default UseMemoCounter;
