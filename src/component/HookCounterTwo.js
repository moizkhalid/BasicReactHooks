import React, { useState } from 'react';

export const HookCounterTwo = () => {
  const initalCount = 0;
  const [count, SetCount] = useState(initalCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      SetCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => SetCount(initalCount)}>Reset</button>
      <button onClick={() => (prevCount) => prevCount + 1}>Increment</button>
      <button onClick={() => (prevCount) => prevCount - 1}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};
