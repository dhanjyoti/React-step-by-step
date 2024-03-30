import React, { useContext, useState } from 'react'
import { CommonContext } from '../component/CommonContext'

const UserProvider = ({children}) => {
    const [color, setColor] = useState("green");

    const updateColor =(color)=>{
        setColor(color||'red')
    }

  return (
    <CommonContext.Provider value={{color, updateColor}}>
        {children}
    </CommonContext.Provider>
  )
}

export const useUser = ()=>{
    return useContext(CommonContext)
}

export default UserProvider;