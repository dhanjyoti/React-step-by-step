import React, { useState } from 'react'

const CounterApp = ({data}) => {
    const [count, setCount] = useState(0);
    const increment =()=>{
        if(count<10){
            setCount(count+1);
        }
    }
    const decrement =()=>{
        if(count >0){
            setCount(count-1)
        }
    }
  return (
    <div>
        <h2>User Function Calling</h2>
        <button onClick={data}>Call the function</button>
        <h1>CounterApp</h1>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterApp