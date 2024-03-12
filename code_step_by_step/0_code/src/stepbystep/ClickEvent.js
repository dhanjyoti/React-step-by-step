import React from 'react'

const ClickEvent = () => {
  let data = "dhanjyoti"
  function apple(){
    alert("Rabha");
  }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>apple()}>Click me</button>
    </div>
  )
}

export default ClickEvent