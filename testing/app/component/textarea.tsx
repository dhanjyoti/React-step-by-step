import React, { useState } from 'react';

function TextAreaComponent() {
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    // Save the data
    const newComments = [...comments, text];
    setComments(newComments);
    
    // Print all comments
    newComments.forEach(comment => console.log("Comment:", comment));
    
    // Clear the textarea
    setText('');
  };

  return (
    <div>
      <h2>Textarea Example</h2>
      <textarea 
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleButtonClick}>Print and Save Comment</button>
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TextAreaComponent;
