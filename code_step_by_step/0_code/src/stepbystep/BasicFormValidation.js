import React, { useState } from "react";

const BasicFormValidation = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    if (user.length < 3 || password.length < 3) {
      alert("type correct value");
    } else {
      alert("all good👍");
    }
    e.preventDefault();
  };

  const userHandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUser(item);
  };
  const passwordHandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(item);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter user Id" onChange={userHandler} />
        {userError ? <span>User Not Valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter user password"
          onChange={passwordHandler}
        />
        {passError ? <span>Password not Valid</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default BasicFormValidation;
