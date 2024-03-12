import React from 'react'
import CounterApp from './CounterApp'

const FunctionProp = () => {
    function getData(){
        alert("hello");
    }
  return (
    <div>
        <CounterApp data={getData}/>
    </div>
  )
}

export default FunctionProp