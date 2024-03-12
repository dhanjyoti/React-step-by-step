import React from 'react'

const SecondChild = ({messageSending}) => {
    const sendMessage=()=>{
        const message = "Message sent from second child";
        messageSending(message);
    }
  return (
    <div>
        <h1>Second Child Function</h1>
        <button onClick={sendMessage}>Click me</button>       
    </div>
  )
}

export default SecondChild