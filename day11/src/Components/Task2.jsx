import React, { useState, useEffect } from 'react';

const Task2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
        <h2>Task-2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Task2;