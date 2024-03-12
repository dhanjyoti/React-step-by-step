import React, {Component} from "react";

class ChildClassComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            message: this.props.messageData,
        }
        
    }
    render(){
        return (
            <div>{this.state.message}</div>
        )
        }
}
export default ChildClassComponent;