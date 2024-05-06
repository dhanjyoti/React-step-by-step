import React from "react";

const PassingProp = ({data}) => {
  return (
    <div>
      <h2>User Component</h2>
      <button onClick={data}>Call data function</button>
    </div>
  );
};

export default PassingProp;
