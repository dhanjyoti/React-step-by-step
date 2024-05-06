import React from "react";

const User = ({ data }) => {

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.contact}</p>
      <button onClick={data.getData}>Hello</button>
    </div>
  );
};

export default User;
