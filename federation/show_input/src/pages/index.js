import { useState } from "react"

export default function Home() {
  const [data, setData] = useState('');
  const [display, setDisplay] = useState('');
  
  const handleInput=(e)=>{
    const value = e.target.value;
    setData(value)

    if(value === ''){
      setDisplay("")
    }
  }
  const handlePrint =()=>{
    setDisplay(data)
  }
  return (
  <div className="flex flex-col justify-center items-center gap-5 mt-16">
    <h2>Show Input</h2>
    <input type="text" className="text-black" value={data} onChange={handleInput} />
    <button onClick={handlePrint} className="bg-blue-600 w-fit px-4 py-1 rounded-md">Print</button>
    <div className="bg-yellow-300 text-white">Input : {display}</div>
  </div>
)
}
