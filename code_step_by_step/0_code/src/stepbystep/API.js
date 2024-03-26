import React, { useEffect, useState } from 'react'

const API = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const result = await fetch("https://dummyjson.com/todos/user/5");
                const response = await result.json();
                console.log("result", response);
                setData(response);
            } catch(error) {
                console.error("error found: ", error);
            }
        }
        fetchData();
    },[])
    console.log(data)
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
                {data?.todos?.map((item, id)=>
                    <tr key={id}>
                        <td>{item?.completed ? "Yes" : "No"}</td>
                        <td>{item?.id}</td>
                        <td>{item?.todo}</td>
                        <td>{item?.userId}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default API


// import React, { useEffect, useState } from 'react';

// const API =()=>{
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
//             result.json().then((res)=>{
//                 console.log(res);
//                 setData(res);
//             })
//         })
//     },[])
//     console.log(data);
//     return (
//         <div>
//             <h2>Get Api</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <td>Status</td>
//                         <td>Id</td>
//                         <td>Todo</td>
//                         <td>UserId</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, id)=>(
//                         <tr key={id}>
//                             <td>{item?.completed ? "Yes" : "Nox"}</td>
//                             <td>{item?.id}</td>
//                             <td>{item?.title}</td>
//                             <td>{item?.userId}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default API;