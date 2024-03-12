import React, {Component} from "react";

class SecondChild extends Component{
    sendMessageToParent=()=>{
        const message = "Message from second child component.";
        this.props.sendMessageToParent(message);
    }
    render(){
        return(
            <div>
                <h1>Second Child</h1>
                <button onClick={this.sendMessageToParent}>Send message</button>
            </div>
        )
    }
}
export default SecondChild