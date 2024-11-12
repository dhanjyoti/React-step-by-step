"use client"
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addUser } from "../redux/slice";
import Link from 'next/link';


export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = ()=>{
    // console.log(name);
    dispatch(addUser(name));
  }

  return (
    <div className="border border-orange-300 m-10 h-[200px] p-5">
      <h3 className="font-semibold text-2xl">User List</h3>
      <input
        className="border border-gray-500"
        type="text"
        placeholder="Add New User"
        onChange={(e)=>setName(e.target.value)}
      />
      <br />
      <button className="px-10 py-3 bg-black text-white rounded-lg mt-10" onClick={userDispatch}>
        Add User
      </button>
      <br/>
      <Link href="/removeuser">Remove User</Link>
      <Link href="/todoList">Go to todo page</Link>
      <Link href="/apiusers">Go to Api User List page</Link>
    </div>
  );
}
