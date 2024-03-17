import React from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';

let details = [
    {id:1, name:"dhan", email:"dhan@gmail.com"},
    {id:2, name:"d", email:"d@gmail.com"},
    {id:3, name:"dh", email:"dh@gmail.com"},
    {id:11, name:"dha", email:"dha@gmail.com"}
]
const Details = () => {
    const [params] = useSearchParams();
    const {id} = useParams()
  return (
    <div>
        <h2>Details page</h2>
        {details.map((item)=>
            <Link to={"/details/"+item.id+"?name="+item.name+"&email="+item.email}><h3>{item.name}</h3></Link>
        )}
        <p>Identity {id}</p>
        <p> Hi this is {params.get("name")}</p>
        <p> Hi this is {params.get("email")}</p>
    </div>
  )
}

export default Details