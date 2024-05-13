import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);
    function handleInput(){
        console.log("first")
        inputRef.current.value = "100";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
  return (
    <div>
        <h3>Use Ref</h3>
        <input type='text' ref={inputRef} />
        <button onClick={handleInput}>Click</button>
    </div>
  )
}

export default UseRef