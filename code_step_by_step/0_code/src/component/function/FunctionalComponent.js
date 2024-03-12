import React, { useState } from "react";
import ChildF from "./ChildF";
import SecondChild from "./SecondChild";

const FunctionalComponent =()=>{
    const [messageFromSecond, setMessageFromSecond] = useState(null);

    const handleMessageSecondChild =(message)=>{
        setMessageFromSecond(message)
    }
    const message= "message from parent";
    return(
        <div>
            <h1>I am parent in Function</h1>
            <ChildF newMessage={message}/>
            <p>Message from second child: {messageFromSecond}</p>
            <SecondChild messageSending={handleMessageSecondChild}/>
        </div>
    )
}
export default FunctionalComponent;