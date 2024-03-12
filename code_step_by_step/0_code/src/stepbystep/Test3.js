import React, { useRef, useState } from 'react'
import Test2 from './Test2'

const Test3 = () => {
    const [name, setName] = useState('')
    let inputRef = useRef(null);
    const handleInput =()=>{
        const newName = inputRef.current.value;
        setName(newName)
    }
  return (
    <div>
        <h2>Forward Ref</h2>
        <Test2 ref={inputRef}/>
        <p>{name}</p>
        <button onClick={handleInput}>Update Input</button>
    </div>
  )
}

export default Test3