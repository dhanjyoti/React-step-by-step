//  Real Time Input Display

import React, { useState } from 'react';

const RealTimeInputDisplay = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default RealTimeInputDisplay;
