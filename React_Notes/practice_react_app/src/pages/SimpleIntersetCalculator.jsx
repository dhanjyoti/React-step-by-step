import React, { useState } from "react";
import InputField from "../component/InputField";

const SimpleIntersetCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState(0);

  const calculator = () => {
    const si = (principal * rate * time) / 100;
    setSi(si.toFixed(2));
  };
  return (
    <div>
      <h1>Simple Interest Calculator</h1>
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
          label="time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
        <button onClick={calculator}>Calculate</button>
      </div>
      <div>
        <h2>Simple Interest: {si}</h2>
      </div>
    </div>
  );
};

export default SimpleIntersetCalculator;
