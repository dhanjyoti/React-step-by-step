import React from 'react'
import useCustom from './useCustom'

const Custom = () => {
    const [count, Increment, Decrement] = useCustom(10);
  return (
    <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Custom