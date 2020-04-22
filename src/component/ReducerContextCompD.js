import React, { useContext } from 'react';
import { CountContext } from '../App';
const ReducerContextCompD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D count {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>reset</button>
    </div>
  );
};

export default ReducerContextCompD;
