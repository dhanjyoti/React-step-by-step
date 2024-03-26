import React, { useState } from 'react'

const POST = () => {
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState('');
    const [userId, setUserId] = useState('');
    function saveItem(){
        console.log({todo, completed, userId});
        let data = {todo, completed, userId}
        fetch("https://dummyjson.com/todos/add",{
            method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json", 
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            // console.log("result", result);
            result.json().then((response)=>{
                console.log("Response", response);
            })
        })
    }
  return (
    <div>
        <h2>Post api example</h2>
        <input type='text' value={todo} onChange={(e)=>{setTodo(e.target.value)}} name="todo" /><br/><br/>
        <input type='text' value={completed} onChange={(e)=>{setCompleted(e.target.value)}} name="completed" /><br/><br/>
        <input type='text' value={userId} onChange={(e)=>{setUserId(e.target.value)}} name="userId" /><br/><br/>
        <button type='button' onClick={saveItem}>Save new Todo</button>
    </div>
  )
}

export default POST