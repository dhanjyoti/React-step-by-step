import React, { useEffect, useState } from 'react'

const NewApi = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    // const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [userId, setUserId] = useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((res)=>{
                // console.log("result", res);
                setData(res);
                setId(res[0].id);
                setTitle(res[0].title);
                setUserId(res[0].userId);
            })
        })
    },[])
    // console.log(data)
    function selectUser(id){
        let item = data[id-1];
        // console.log(id, data)
        console.log(data[id]);
        setId(item.id);
        setTitle(item.title);
        setUserId(item.userId);
    }

  return (
    <div>
        <h2>Api fetch</h2>
        <div>
            <input type='number' value={id}/><br/><br/>
            <input type='text' value={title}/><br/><br/>
            <input type='number' value={userId}/><br/><br/>
            <button>Update</button>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    {/* <td>Body</td> */}
                    <td>Title</td>
                    <td>UserId</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>
                <tr style={{border:"1px solid green"}}>
                    <td>{item.id}</td>
                    {/* <td>{item.body}</td> */}
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                    <td>
                        <button onClick={()=>selectUser(item.id)}>Update</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default NewApi