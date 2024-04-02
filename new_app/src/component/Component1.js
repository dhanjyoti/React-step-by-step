import React from 'react'
import {useUser } from './CommonContext';

const Component1 = () => {
    const {counter, increment, decrement} = useUser();
  return (
    <div>
        <p>Counter {counter}</p>

        <button onClick={()=>increment()}>Increase Count</button>
        <button onClick={()=>decrement()}>Decrease Count</button>
    </div>
  )
}

export default Component1