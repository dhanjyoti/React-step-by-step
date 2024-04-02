import React, {createContext, useContext, useState} from 'react';
export const CommonContext = createContext();

const UserProvider = ({children})=>{
    const [color, setColor] = useState("green");
    const [counter, setCounter] = useState(0);
    const [stop, setStop] = useState(false);

    const increment =()=>{
        if(!stop && counter < 100)
        setCounter(prev=>prev+1);
    }
    const decrement =()=>{
        if(!stop && counter > 0)
        setCounter(prev=>prev-1)
    }

    const toggleFunction=()=>{
        setStop(prevStop => !prevStop)
    }

    const updateColor =()=>{
        setColor("blue")
    }
    return (
        <CommonContext.Provider value={{color, counter, updateColor, increment, decrement, stop, toggleFunction}}>
            {children}
        </CommonContext.Provider>
    )
}
export default UserProvider;

export const useUser =()=>{
    return useContext(CommonContext)
}