import { useState } from 'react'
import InputForm from '../stepbystep/InputForm';


const SimpleInterestApp = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [simpleInterest, setSimpleInterest] = useState(0);

    const calculateSI = ()=>{
        const si = (principal*rate*time)/100;
        setSimpleInterest(si);
        console.log(si)
    }
  return (
    <>
        <div>
            <InputForm label="principal" value={principal} onChange={(e)=>setPrincipal(parseFloat(e.target.value))}/>
            <InputForm label="rate" value={rate} onChange={(e)=>setRate(parseFloat(e.target.value))}/>
            <InputForm label="time" value={time} onChange={(e)=>setTime(parseFloat(e.target.value))}/>
            <button onClick={calculateSI}>Calculate</button>
        </div>
        <div>
            <h2>Simple Interest: {simpleInterest}</h2>
        </div>
    </>
  )
}

export default SimpleInterestApp