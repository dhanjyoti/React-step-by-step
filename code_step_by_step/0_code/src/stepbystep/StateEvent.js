import React, { useState } from 'react'
import Props from './Props';

const StateEvent = () => {
    const [data, setData] = useState("dhanjyoti");
    const [name, setName] = useState("polu")
    function updateData(){
        setData("Rabha");
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Click</button>
        <Props name={name}/>
        <button onClick={()=>{setName("rabha")}}>Update Name</button>
    </div>
  )
}

export default StateEvent