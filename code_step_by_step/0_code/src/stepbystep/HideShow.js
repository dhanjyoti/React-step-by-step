import React, { useState } from 'react'

const HideShow = () => {
    const [status, setStatus] = useState(true);
  return (
    <div>
        {
            status ? <h2>Hello</h2> : null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>*/}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default HideShow