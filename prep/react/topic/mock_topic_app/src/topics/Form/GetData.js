import React, { useState } from "react";

const GetData = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  const getFormData = (e) => {
    console.log(name, interest, tnc);
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Handle Form</h2>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select option</option>
          <option>Marval</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} />
        <span>Terms</span>
        <br />
        <br />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default GetData;
