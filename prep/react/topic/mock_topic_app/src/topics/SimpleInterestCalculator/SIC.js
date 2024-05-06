import React, { useState } from "react";
import InputField from "./InputField";

const SIC = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState(0);

  const calculator = () => {
    const si = (principal * rate * time) / 100;
    setSi(si);
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
          label="time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
        <button onClick={calculator}>Calculator</button>
      </div>
      <div>
        <h3>Simple Interest: {si}</h3>
      </div>
    </div>
  );
};

export default SIC;
