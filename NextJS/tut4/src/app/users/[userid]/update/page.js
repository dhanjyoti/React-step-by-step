"use client"
import React, { useEffect, useState } from 'react'

export default function Page({params}) {
  let id = params.userid;
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  useEffect(()=>{
    getUserDetails()
  }, [])

  const getUserDetails = async ()=>{
    let data = await fetch("http://localhost:3000/api/users/"+id);
    data = await data.json();
    setName(data.result.name)
    setAge(data.result.age)
    setEmail(data.result.email)
  }

  const updateUser= async ()=>{
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method:"PUT",
      body:JSON.stringify({name, age, email})
    })
    result = await result.json();
    console.log(result);
    if(result.success){
      alert("user information updated")
    } else {
      alert("failed updating")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
        <h1>Update user Details</h1>
        <input type='text' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
        <input type='number' value={age} placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
        <input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={updateUser} className='border border-blue-900 max-w-32'>Update User</button>
    </div>
  )
}
