import React, { useState, useEffect } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(`Input value: ${inputValue}`);
  }, [inputValue]);

  return (
    <>
    <h2>Task-3</h2>
    <input
      type="text"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
    </>
  );
};

export default InputField;