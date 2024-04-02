import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosCom = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    },[])

  return (
    <div>
        <h1>Axios</h1>
        {
            data.map((item)=>{
                return (
                    <p>{item.name}</p>
                )
            })
        }
    </div>
  )
}

export default AxiosCom



// https://jsonplaceholder.typicode.com/users