"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function DisplayUsers(){
    const userData = useSelector((data)=>data.userData.users);
    const dispatch = useDispatch();
    // console.log(userData)
    return (
        <div className="border border-orange-300 m-10 h-[400px] p-5">
            <h1 className="font-semibold text-2xl">Display Users</h1>
            <div className="flex flex-col gap-2 overflow-y-scroll max-h-[340px]">
                {
                    userData.map((item)=>(
                        <div key={item.id} className="flex flex-row justify-between bg-slate-300 w-[50%] rounded-lg p-3">
                            <span>{item.name}</span>
                            <button onClick={()=>dispatch(removeUser(item.id))} className="border border-gray-800 px-4 rounded-md bg-white">Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}