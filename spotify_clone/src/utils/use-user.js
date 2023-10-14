import {createContext, useContext, useEffect, useMemo, useState} from "react";

// Context is used here to provide global access to user instance.
const UserContext = createContext({user:null, setUser:()=>{}})

export const UserProvider = ({children})=> {
    const [user, setUser] = useState(getUser())

    useEffect(()=>{
        if(user){
            saveUser(user)
        }
    },[user]) // <-- useEffect only run when user is changed
    return <UserContext.Provider value={useMemo(()=>({user, setUser}),[user, setUser])}>{children}</UserContext.Provider>
}
const saveUser = (user)=>{
    localStorage.setItem('user', JSON.stringify(user))
}

const getUser = ()=> {
    try{
        return JSON.parse(localStorage.getItem('user'))
    }catch{
        return null
    }
}

// This hook is for managing user state (login or logged out)

const useUser = ()=>{
    return useContext(UserContext)
}

export default useUser;