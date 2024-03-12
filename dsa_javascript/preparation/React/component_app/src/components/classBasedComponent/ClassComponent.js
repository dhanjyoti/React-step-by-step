import React, {Component} from 'react';
import ChildClassComponent from './ChildClassComponent';

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "I am parent",
        }
    }
    render(){
        return(
            <>
                <div>Class Component{this.state.message}</div>
                <ChildClassComponent messageData="I am a child component" />
            </>
        )
    }
}
export default ClassComponent;