import React from 'react'
import { useState } from 'react';

const Counter = () => {
    // counter is the variable & setCounter is a function/method
    const [counter, setCounter] = useState(0);

    const addValue = () => {
      setCounter(counter + 1);
    }
  
    const removeValue = () => {
      setCounter(counter - 1);
    }
  return (
    <div>
      <h1>React Counter {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button className='bg-gray-700 text-stone-50 px-2 py-1 rounded-lg' onClick={addValue}>Add value</button> {" "}
      <button className='bg-gray-700 text-stone-50 px-2 py-1 rounded-lg' onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </div>
  )
}

export default Counter