import React, { useState } from "react";
import InputField from "../components/InputField";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [simpleInterest, setSimpleInterset] = useState(0);

  const Calculate = () => {
    const si = (principal * rate * time) / 100;
    setSimpleInterset(si);
  };
  return (
    <div>
      <h2>Simple Interest Calculator</h2>
      <div>
        <InputField
          label="principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
        <InputField
          label="rate"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <InputField
          label="Time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
        <button onClick={Calculate}>Calculator</button>
      </div>
      <div>
        <h3>Simple Interest: {simpleInterest}</h3>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
