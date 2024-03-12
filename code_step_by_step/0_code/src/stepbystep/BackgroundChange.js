import React, { useState } from 'react';

const BackgroundChange = () => {
    const [color, setColor] = useState(true);
    const backGround=()=>{
        setColor(!color);
    }

  return (
    <div style={{backgroundColor:color?"green":"red"}}>
        <div>hello</div>
        <button onClick={backGround}>Click</button>
    </div>
  )
}

export default BackgroundChange