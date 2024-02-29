import React, { useState } from 'react';

const InputMirror = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="inputField">Input:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <label>Input Mirror:</label>
      <div>{inputValue}</div>
    </div>
  );
};

export default InputMirror;
