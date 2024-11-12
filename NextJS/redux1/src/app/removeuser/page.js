"use client";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeUser } from "../redux/slice";

export default function Page(){
    const userData = useSelector((data)=> data.userData.users);
    const dispatch = useDispatch();
    // console.log(userData)
	return (
		<div className="border border-orange-300 m-10 h-[400px] p-5">
			<h1 className="font-semibold text-2xl">Remove User Page</h1>
            <div className="flex flex-col gap-2 overflow-y-scroll max-h-[340px]">
            {userData.map((item)=>(
                <div key={item.id}>
                <span>{item.name}</span><br/>
                <button onClick={()=>dispatch(removeUser(item.id))}  className="px-10 py-3 bg-black text-white rounded-lg mt-10">Remove User</button>
                </div>
            ))}
            </div>
		</div>
	)
}
