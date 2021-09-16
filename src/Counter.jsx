import React, { useState } from 'react';
import useDebounce from './useDebounce';

export default function Counter() {
  const [value, setValue] = useState(0);
  const lastValue = useDebounce(value, 1000);
  return (
    <div>
      <p>
        Normal value: {value} <span className="divider">|</span> Debounced value: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};