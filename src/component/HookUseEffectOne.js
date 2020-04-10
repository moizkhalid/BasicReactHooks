import React, { useState, useEffect } from 'react';

const HookUseEffectOne = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Cliked Count ${count}`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookUseEffectOne;
