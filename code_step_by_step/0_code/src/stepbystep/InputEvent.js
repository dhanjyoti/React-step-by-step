import React, { useState } from 'react'

const InputEvent = () => {
    const [data, setData] = useState('');
    const [print, setPrint] = useState(false);
    function getData(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false);
    }
  return (
    <div>
        {
            print ? <h2>{data}</h2> : null
        }
        <input type='text' onChange={getData}/>
        <button onClick={()=>setPrint(true)}>Print</button>
    </div>
  )
}

export default InputEvent