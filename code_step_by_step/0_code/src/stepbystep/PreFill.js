// "https://jsonplaceholder.typicode.com/todos/1"

import React, { useState } from 'react'

const PreFill = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    function saveUser(){
        console.log(id, title, body, userId);
        let data = {id, title, body, userId}
        fetch("https://jsonplaceholder.typicode.com/todos/1",{
            method: 'POST',

            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json; charset=UTF-8',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res);
            })
        })
    }
  return (
    <div>
        <h2>Pre Fill</h2>

        <input type='number' name='id' value={id} onChange={(e)=>{setId(e.target.value)}}/><br/><br/>
        <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>
        <input type='text' name='body' value={body} onChange={(e)=>{setBody(e.target.value)}}/><br/><br/>
        <input type='number' name='userId' value={userId} onChange={(e)=>{setUserId(e.target.value)}}/><br/><br/>
        <button type='button' onClick={saveUser}>Save User</button>
    </div>
  )
}

export default PreFill