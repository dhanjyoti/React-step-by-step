import React, { useState } from "react";

function ExpandingTextarea() {
  const [text, setText] = useState("");

  const [height, setHeight] = useState("auto");

  const handleChange = (event) => {
    const textareaLineHeight = 24; // Adjust this value based on your textarea's line-height

    const previousRows = event.target.rows;

    event.target.rows = 1; // Reset the number of rows in textarea

    const currentRows = Math.ceil(
      event.target.scrollHeight / textareaLineHeight
    );

    // Set the new height if the number of rows has changed

    if (currentRows === previousRows) {
      event.target.style.height = "auto";
    } else {
      event.target.style.height = `${currentRows * textareaLineHeight}px`;
    }

    setText(event.target.value);

    setHeight(event.target.style.height);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Prevent the default behavior of inserting a newline

      event.preventDefault();
    }
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      style={{ height,  }}
    />
  );
}

export default ExpandingTextarea;
