import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

export default function Counter() {
  const [value, setValue] = useState(0);
  const lastValue = useDebounce(value, 500);
  return (
    <div>
      <p>
        Current: {value} - Debounced: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};