import React, { useMemo, useState } from 'react'

const Test2 = () => {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiMemo = useMemo(()=>{
    console.log("****")
    return plus * 5
  },[plus]);

  return (
    <>
      <h2>{multiMemo}</h2>
      <button onClick={()=>setPlus(plus + 1)}>Plus</button>
      <p>{plus}</p>
      <button onClick={()=>setMinus(minus - 1)}>Minus</button>
      <p>{minus}</p>

    </>
  )
}

export default Test2