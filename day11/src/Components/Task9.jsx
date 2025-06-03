import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <h2>Task-9</h2>
    <div>Count: {count}</div>
    </>
  ) 
};

export default Timer;