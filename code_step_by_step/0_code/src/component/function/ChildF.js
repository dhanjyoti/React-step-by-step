import React from "react";

const ChildF =(props)=>{
    return(
        <div>
            <h1>Child Function</h1>
            <p>message from parent function: {props.newMessage}</p>
        </div>
    )
}
export default ChildF;