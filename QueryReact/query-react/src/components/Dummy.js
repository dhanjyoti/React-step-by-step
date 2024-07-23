import axios from 'axios'
import React, { useEffect, useState } from 'react'

// const apiData = "http://fakestoreapi.com/products"

const Dummy = () => {
    // const [image, setTitle] = useState([]);
    // useEffect(()=>{
    //     async function getStoreData(){
    //         const response = await axios.get(`${apiData}/1`);
    //         console.log(response)
    //         setTitle(response.data.image)
    //     } 
    //     getStoreData()
    // })

    const [todos, setTodos] = useState([])
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/todos")
            .then((res)=>res)
            .then((e) => e.json())
            .then((e) => setTodos(e))
    },[])
  return (
    <div>
        <h1>Dummy data</h1>
        {todos.map((todos)=>(
            <li key={todos.id}>{todos.title}</li>
        ))}
        {/* <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Alterego</td>
            </tr>
            {title.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.alterEgo}</td>
                </tr>
            ))}
        </table> */}
    </div>
  )
}

export default Dummy