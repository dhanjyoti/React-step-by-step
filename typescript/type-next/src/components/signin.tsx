import { useState } from "react";

export default function Signin(){
    interface UserType{
        name: string,
        email: string
    }
    // const [isSignIn, setSignIn] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);
    const handleSignIn = ()=> {
        setUser({
            name: "dhanjyoti",
            email: "dj@gmail.com"
        })
    }
    const handleSignOut =()=>{
        setUser(null)
    }

    return (
        <div className="flex flex-col gap-2">
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            {/* <div>{isSignIn ? "Sign In" : "Sign Out"}</div> */}
        </div>
    )
}