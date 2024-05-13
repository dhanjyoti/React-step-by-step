import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const multiMemo = useMemo(function multiCount(){
        console.log("multiCount");
        return count*5;
    },[count])
  return (
    <div>
        <h2>Use Memo Hook</h2>
        <h4>Count: {count}</h4>
        <h4>Item: {item}</h4>
        <h3>{multiMemo}</h3>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  )
}

export default UseMemo