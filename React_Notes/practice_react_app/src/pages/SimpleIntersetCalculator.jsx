import React, { useState } from 'react'
import InputField from '../component/InputField'

const SimpleIntersetCalculator = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [simpleInterest, setSimpleInterest] = useState(0);

    const calculateSimpleInterest = ()=>{
        const si = (principal * rate * time)/100;
        setSimpleInterest(si);
    }
  return (
    <div>
        <h2>Simple Interest Calculator</h2>
        <div>
            <InputField 
                label="Principal"
                value={principal}
                onChange={(e)=>setPrincipal(parseFloat(e.target.value))}
            />
            <InputField 
                label="Interest Rate"
                value={rate}
                onChange={(e)=> setRate(parseFloat(e.target.value))}
            />
            <InputField 
                label="Time (in years):"
                value={time}
                onChange={(e)=> setTime(parseFloat(e.target.value))}
            />
            <button onClick={calculateSimpleInterest}>Calculator</button>
        </div>
        <div>
            <h3>Simple Interest: {simpleInterest}</h3>
        </div>
    </div>
  )
}

export default SimpleIntersetCalculator