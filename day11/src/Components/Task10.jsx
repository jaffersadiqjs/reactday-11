import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
        <h2>Task-10</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      {isVisible && <p>This paragraph is visible.</p>}
    </div>
  );
};

export default ToggleVisibility;