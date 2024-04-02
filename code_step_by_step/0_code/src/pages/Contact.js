import React, { useState } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import useTitle from '../utils/useTitle';

let user = [
  {id: 1, name: "Dhan", email: "dhan@gmail.com"},
  {id: 2, name: "DDD", email: "ddd@gmail.com"},
  {id: 3, name: "Rahul", email: "Rahul@gmail.com"},
  {id: 4, name: "Akash", email: "akash@gmail.com"},
  {id: 5, name: "joy", email: "joy@gmail.com"},
]

const Contact = () => {
  const [count, setCount] = useState(0);
  useTitle(count)

  const [params] = useSearchParams();
  const {id} = useParams();
  return (
    <div>
      <butto onClick={()=>setCount(count+1)}>Click to Count</butto>
      <h2>Dynamic</h2>
        {
          user.map((item)=>
            <div>
              <Link to={"/contact/"+item.id+"?name="+item.name+"&email="+item.email}><h3>{item.name}</h3></Link>
            </div>
          )
        }
        <p>Identity: {id}</p>
        <p> Hi this is {params.get("name")}</p>
        <p> Hi this is {params.get("email")}</p>
    </div>
  )
}

export default Contact