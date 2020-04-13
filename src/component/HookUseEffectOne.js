import React, { useState, useEffect } from 'react';

const HookUseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('use effect updating the title');
    document.title = `Cliked Count ${count}`;
  }, [count]);
  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookUseEffectOne;
