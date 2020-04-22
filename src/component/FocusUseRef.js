import React, { useEffect, useRef } from 'react';

const FocusUseRef = () => {
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={InputRef} type='text' />
    </div>
  );
};

export default FocusUseRef;
