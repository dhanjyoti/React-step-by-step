import React, { useEffect, useState } from 'react'

const TableData = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://gorest.co.in/public/v2/users")
    .then((result) => result.json())
    .then((res)=>{
        console.log("Api result", res);
        setData(res);
    })
    },[])
  return (
    <div>
        <h1>Table data fetch</h1>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default TableData