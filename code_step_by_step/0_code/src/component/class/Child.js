import React, {Component} from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <div>Child Component</div>
                <p>Message from parent: {this.props.messageData}</p>
            </div>
        )
    }
}
export default Child;