import { createContext, useContext } from "react";

const CommonContext = createContext();

const UserContext =({children})=>{
    const name = "Jhon";


    return (
        <CommonContext.Provider value={name} >
            {children}
        </CommonContext.Provider>
    )
}

export const useName = ()=>{
    return useContext(CommonContext)
}
export default UserContext