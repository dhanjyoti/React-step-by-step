import React from 'react'
import { useState } from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0);

    const handleClickInc =()=> {
        setCount(count+1);
    }

    const handleClickDec =()=> {
        setCount(count-1);
    }
  return (
    <div className='App'>
        <h1>{count}</h1>
        <button onClick={handleClickInc}>+</button>
        <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default Counter2