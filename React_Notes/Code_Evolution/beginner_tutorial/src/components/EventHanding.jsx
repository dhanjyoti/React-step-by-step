import React from 'react'

function EventHanding() {
    function clickHandler(){
        console.log("button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Clicked</button>
    </div>
  )
}

export default EventHanding