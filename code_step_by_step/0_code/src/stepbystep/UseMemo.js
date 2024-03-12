import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount(){
        console.log("multi")
        return count*5;
    }, [count])

  return (
    <div>
        <h1>useMemo Hook in React</h1>
        <div>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item+10)}>Update Item</button>
        </div>
    </div>
  )
}

export default UseMemo