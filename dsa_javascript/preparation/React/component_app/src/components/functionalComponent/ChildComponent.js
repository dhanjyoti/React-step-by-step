import React from "react";

const ChildComponent =(props)=>{
    return (
        <div>
            <div>this is child</div>
            <div>{props.message}</div>
        </div>
    )
}
export default ChildComponent;