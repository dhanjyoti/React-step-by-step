import React from 'react'
import { useUser } from './CommonContext'

const Home = () => {
    const {counter,increment, decrement, updateColor, color, toggleFunction} = useUser();

  return (
    <div style={{color:color}}>
        <h1 style={{fontSize:counter}}>This is Home Page:  {counter}</h1><br/><br/>
        <button onClick={()=>updateColor()}>Change Color</button><br/><br/>
        <button onClick={()=>increment()}>Incrementr</button><br/><br/>
        <button onClick={()=>decrement()}>Decrement</button><br/><br/>
        <button onClick={()=>toggleFunction()}>Stop</button>
    </div>
  )
}

export default Home