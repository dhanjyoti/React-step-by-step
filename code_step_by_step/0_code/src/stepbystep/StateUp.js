import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const StateUp = () => {
    const [name, setName] = useState('dj');
    const getName =(data)=>{
        alert(data)
        setName(data)
    }

  return (
    <div>
        <h2>Parent Component</h2>
        <p>{name}</p>
        <div>
            <ChildComponent alert={getName} />
        </div>
    </div>
  )
}

export default StateUp