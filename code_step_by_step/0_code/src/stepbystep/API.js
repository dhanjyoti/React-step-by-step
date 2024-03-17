import React, { useEffect, useState } from 'react'

const API = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            result.json().then((response)=>{
                // console.log("result", response); 
                setData(response);
            })
        })
    },[])
    // console.log(data)
  return (
    <div>
        <h1>Get Api</h1>
        <table>
            <thead>
                <tr>
                    <td>Status</td>
                    <td>Id</td>
                    <td>Todo</td>
                    <td>UserId</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, id)=>
                    <tr key={id}>
                        <td>{item?.completed ? "Yes" : "No"}</td>
                        <td>{item?.id}</td>
                        <td>{item?.title}</td>
                        <td>{item?.userId}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default API