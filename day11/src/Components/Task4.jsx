import React, { useEffect } from 'react';

const ComponentMounted = () => {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <>
    <h2>Task-4</h2>
    <div>Component Mounted Example</div>
    </>
  ) 
};

export default ComponentMounted;
