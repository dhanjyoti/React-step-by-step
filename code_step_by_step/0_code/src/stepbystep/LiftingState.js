import React, { useState } from 'react'
import Child from './Child'

const LiftingState = () => {
  const [name, setName] = useState("dj")
    function parentAlert(data){
        alert(data)
        setName("Dhanjyoti")
    }
  return (
    <div>
        <h1>Lifting State</h1>
        <p>{name}</p>
        <Child alert={parentAlert}/>
    </div>
  )
}

export default LiftingState