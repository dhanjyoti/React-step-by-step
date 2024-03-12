import React, { useCallback, useEffect, useState } from 'react'
import ButtonComponent from './ButtonComponent';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const incrementCount = useCallback(()=>{
        setCount(prevcount => prevcount + 1)
    },[])
    useEffect(()=>{
        console.log("first");
    },[incrementCount])
  return (
    <div>
        <h2>{count}</h2>
        <ButtonComponent incrementCount={incrementCount}/>
    </div>
  )
}

export default UseCallback