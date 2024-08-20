import React, { useState } from 'react'
import jhon from "../utils/useTitle"
import { useName } from '../utils/UserContext'

const About = () => {
  const name = useName();
  const [count, setCount] = useState(0)
  jhon(count)
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {count}
      </div>
      <button onClick={()=>setCount(count+2)}>Click</button>
    </div>
  )
}

export default About