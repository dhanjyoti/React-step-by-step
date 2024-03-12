import React, { useState } from 'react'

const NameChanger = () => {
    const [name, setName] = useState(true);

    const handleName=()=>{
        setName(!name);
    }

  return (
    <div>
        {
            name?
            <h2 style={{color:"green"}}>Rahul Sir</h2>
            : <h2 style={{color:"red"}}>Dhanjyoti</h2>
        }
        <button onClick={()=>handleName()}>Change Name</button>
    </div>
  )
}

export default NameChanger