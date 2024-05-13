import React, { useCallback, useState } from 'react'
import Calc from './Calc';

const UseCallback = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
    const learning = useCallback(()=>{

    },[count])
  return (
    <div>
        <Calc learning={learning}/>
        <h3>UseCallback</h3>
        <p>{add}</p>
        <button onClick={()=>setAdd(add+1)}>Update</button><br/><br/>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>New Update</button>
    </div>
  )
}



export default UseCallback