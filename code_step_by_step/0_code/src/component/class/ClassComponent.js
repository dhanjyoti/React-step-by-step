import React, {Component} from 'react';
import Child from './Child';
import SecondChild from './SecondChild';

class ClassComponent extends Component{
    render(){
        const message = "message from parent component";
        return(
            <div>
                <div>Parent Component</div>
                <Child messageData={message}/>
                <SecondChild sendMessageToParent={(data)=> console.log("Messege received from second child", data)}/>
            </div>
        )
    }
}
export default ClassComponent;