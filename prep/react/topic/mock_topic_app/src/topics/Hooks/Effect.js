import React, { useState, useEffect } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("component mount");
        return ()=>{
            console.log("component will mount");
        }
    },[])
  return (
    <div>
        <h2>Use Effect</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Effect