import React from 'react'

const ChildComponent = (prop) => {
    const data = "dhanjyoti rabha";
  return (
    <div>
        <h3>Child Component</h3>
        <button onClick={()=>prop.alert(data)}>Click</button>
    </div>
  )
}

export default ChildComponent