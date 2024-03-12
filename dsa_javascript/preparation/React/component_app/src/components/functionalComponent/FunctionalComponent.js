import React  from "react";
import ChildComponent from "./ChildComponent";

const FunctionalComponent =()=>{
    const message ="I am parent";
    return(
        <div>
            <h1>This is parent component</h1>
            <ChildComponent message={message}/>
        </div>
    )
}
export default FunctionalComponent;