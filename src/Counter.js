import React, { useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button>{count}</button>
    </div>
  );
};

export default Counter;