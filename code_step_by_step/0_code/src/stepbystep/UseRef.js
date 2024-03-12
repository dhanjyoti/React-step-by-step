import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [newName, setNewName] = useState('')
    const nameRef = useRef(null);
    const handleInput =()=>{
        const theName = nameRef.current.value;
        setNewName(theName);
    }
  return (
    <div>
        <input type='text' ref={nameRef}/>
        <p>{newName}</p>
        <button onClick={handleInput}>Print</button>
    </div>
  )
}

export default UseRef