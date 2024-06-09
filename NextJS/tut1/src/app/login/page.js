"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter();
  const navigate=(page)=>{
    router.push("/login/"+page)
  }
  return (
    <div>
        <h2 className="text-center mt-20 text-yellow-500 text-4xl font-bold">Login page</h2>
        <Link href="/">Go to home page</Link>
        <br />
        <br />
        <button onClick={()=>navigate("loginstudent")}>Go to Student Login</button>
        <br />
        <br />
        <button onClick={()=>navigate("loginteacher")}>Go to teacher Login</button>
    </div>
  )
}

export default Login