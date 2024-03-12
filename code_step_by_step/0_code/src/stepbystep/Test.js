import React, { useState } from 'react'
import InputForm from './InputForm'

const Test = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  const calculateSimpleInterest =()=>{
    const si = (principal * rate * time)/100;
    setSimpleInterest(si);
    console.log(si)
  }

  return (
    <>
      <div>
        <InputForm
          label="Principal"
          value={principal}
          onChange={(e)=>setPrincipal(parseFloat(e.target.value))}
        />
        <InputForm
          label="Interest Rate"
          value={rate}
          onChange={(e)=>setRate(parseFloat(e.target.value))}
        />
        <InputForm
          label="Time(in years):"
          value={time}
          onChange={(e)=>setTime(parseFloat(e.target.value))}
        />
        <button onClick={calculateSimpleInterest}>Calculator</button>
      </div>
      <div>
        <h2>Simple Interest: {simpleInterest}</h2>
      </div>
    </>
  )
}

export default Test