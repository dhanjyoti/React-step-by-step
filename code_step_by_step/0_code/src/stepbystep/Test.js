import React from 'react';

function Test12() {
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="textarea-container">
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your text here..."
        className="textarea"
      ></textarea>
      <button onClick={handleClick} className="button-inside-textarea">
        Submit
      </button>
    </div>
  );
}


export default Test12;