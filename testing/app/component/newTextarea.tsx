

// import React, { useState, useRef } from 'react';

// function NTextAreaComponent() {
//   const [text, setText] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const boundaryRef = useRef(null);

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleAddText = () => {
//     // Split the text by newline characters to get each line
//     const lines = text.split('\n');

//     // Filter out the lines that are not comments
//     const comments = lines.filter(line => line.trim().startsWith('//'));

//     // Print the comments to console
//     console.log("Comments:", comments);

//     setText('');
//     boundaryRef.current.focus();
//   };

//   const handleWrapperClick = () => {
//     setIsFocused(true);
//   };

//   const handleInputFocus = () => {
//     setIsFocused(true);
//   };

//   const handleInputBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className={`border p-4 max-w-md mx-auto ${isFocused ? 'border-blue-500' : ''}`} ref={boundaryRef} onClick={handleWrapperClick}>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         className="border rounded p-2 w-full resize-none focus:outline-none"
//         placeholder="Type something..."
//       />
//       <button onClick={handleAddText} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
//         Add Text
//       </button>
//     </div>
//   );
// }

// export default NTextAreaComponent;

import React, { useState, useRef } from 'react';

function NTextAreaComponent() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [comments, setComments] = useState([]);
  const boundaryRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddText = () => {
    // Split the text by newline characters to get each line
    const lines = text.split('\n');

    // Filter out the lines that are comments
    const extractedComments = lines.filter(line => line.trim().startsWith('//'));

    // Update the comments state
    setComments(prevComments => [...prevComments, ...extractedComments]);

    setText('');
    boundaryRef.current.focus();
  };

  const handleWrapperClick = () => {
    setIsFocused(true);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`border p-4 max-w-md mx-auto ${isFocused ? 'border-blue-500' : ''}`} ref={boundaryRef} onClick={handleWrapperClick}>
      <textarea
        value={text}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="border rounded p-2 w-full resize-none focus:outline-none"
        placeholder="Type something..."
      />
      <button onClick={handleAddText} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
        Add Text
      </button>
      {/* Render comments below the textarea */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="text-gray-600">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NTextAreaComponent;
