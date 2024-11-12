"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice'

export default function Page() {
    const dispatch = useDispatch();
    const apiUserData = useSelector((data)=>data.userData.userApiData);
    
    
    useEffect(()=>{
        dispatch(fetchApiUsers());
    },[])
  return (
    <div>
        <h1>User List from Api</h1>
        {/* <button onClick={()=>dispatch(fetchApiUsers())}>Load Users</button> */}
        {
            apiUserData.length && apiUserData.map((item)=>(
                <h4 key="id">{item.name}</h4>
            ))
        }
    </div>
  )
}
