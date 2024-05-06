import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [namErr, setNamErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    if (date < currentDate) {
      setDateErr(true);
      setShow(false);
    } else {
      setShow(true);
      setDateErr(false);
    }
  };

  const handleName = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setNamErr(true);
    } else {
      setNamErr(false);
    }
    setName(item);
  };
  const handleAge = (e) => {
    let item = e.target.value;
    if (item >= 60 || item <= 20) {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }
    setAge(item);
  };
  const handleEmail = (e) => {
    let item = e.target.value;
    setEmail(item);
  };
  const handlePassword = (e) => {
    let item = e.target.value;
    if (item.length <= 10) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  };
  const handleDate = (e) => {
    let item = e.target.value;

    setDate(item);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="name"
        />
        {namErr ? <span>name not valid</span> : null}
        <br />
        <br />

        <input
          type="number"
          value={age}
          onChange={handleAge}
          placeholder="age"
        />
        {ageErr ? <span>age should not be more then 60</span> : null}
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="password"
        />
        {passErr ? <span>password should not be less than 10 char</span> : null}
        <br />
        <br />
        <input
          type="date"
          value={date}
          onChange={handleDate}
          placeholder="data"
        />
        {dateErr ? <span>date should be greater than present date</span> : null}

        <br />
        <br />
        <button type="submit">Click me</button>
        <br />
        <br />
        {show && (
          <div>
            <p>User Name: {name}</p>
            <p>User Age: {age}</p>
            <p>User Email: {email}</p>
            <p>User Password: {password}</p>
            <p>User Date: {date}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormValidation;
