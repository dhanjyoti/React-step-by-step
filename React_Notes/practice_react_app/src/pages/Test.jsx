import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action)=>{
  switch(action){
    case "Increment":
      return state+1;
    case "Decrement":
      return state-1;
    default:
      return state
  }
}

const Test = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Reducer</h1>
      <div>
        <p>{count}</p>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
      </div>
    </>
  )
}

export default Test;