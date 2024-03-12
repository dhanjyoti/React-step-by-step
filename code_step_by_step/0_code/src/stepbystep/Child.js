import React from 'react'

const Child = (prop) => {
    // const data = "Dhanjyoti Rabha"
    const data = "Dhanjyoti Rabha"
  return (
    <div>
        <h2>User Component: </h2>
        {/* <button onClick={()=>prop.alert(data)  }>Click me</button> */}
        <button onClick={()=>prop.alert(data)}>Click me</button>
    </div>
  )
}

export default Child