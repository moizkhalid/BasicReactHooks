import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
};

export default useInput;
