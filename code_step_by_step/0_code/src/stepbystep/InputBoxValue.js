import React, { useState } from 'react'

const InputBoxValue = () => {
    const [val, setVal] = useState("");
    const [inputs, setInputs] = useState('');

   
  return (
    <div>
        <h1>{val}</h1>
        <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />
        <h2>{inputs}</h2>
        <input type='text' value={inputs} onChange={(e)=>setInputs(e.target.value)}/>
    </div>
  )
}

export default InputBoxValue