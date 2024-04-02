import React from 'react'
import { useUser } from './CommonContext'

const Component2 = () => {
    const {color, counter, increment, decrement} = useUser();
  return (
    <div style={{border:"2px solid", borderColor:color}}>
        <h1>Counting: {counter}</h1>
        <button onClick={()=>increment()}>Increase</button>
        <button onClick={()=>decrement()}>Decrease</button>
    </div>
  )
}

export default Component2