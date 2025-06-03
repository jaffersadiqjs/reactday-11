import React, { useState, useEffect } from 'react';

const Mini1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
         <h2>Mini-project-1</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default Mini1;
