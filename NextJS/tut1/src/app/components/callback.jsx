import React, { useState } from 'react'

const Callback = ({getColor}) => {
    const [activecolor, setActiveColor] = useState("");
    const handleChange =(e)=>{
        const {value}= e.target;
        setActiveColor(value);
        getColor(value);
    }
  return (
    <div>
        <input type='text' id='input' aria-label='input' placeholder='type' onChange={handleChange} value={activecolor} />
    </div>
  )
}

export default Callback;