import React, { useReducer } from 'react';
const initalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return initalState;

    default:
      return state;
  }
};
const UseReducerCounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <div>count ~ {count} </div>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

export default UseReducerCounterOne;
