import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const BasicForm = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mname: "",
    lname: "",
    // edit: false
  });
  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => {
      return { ...prev, [name]: value };
    });

  };
  const getFormData = (e) => {
    e.preventDefault();
    // console.log(data);
    setList([...list, data]);
    setData({
        name: "",
        email: "",
        password: "",
        age: "",
        mname: "",
        lname: "",
        // edit: false
      })
  };
  // console.log(list);

  const clearAll=()=>{
    setList([])
  }

  const deleteData=(i)=>{
    const data1 = list.filter((item, id)=>{
      return (id !== i)
    });
    setList(data1);
  }


  return (
    <div>
      <h2>Handle Form</h2>

      <form onSubmit={getFormData}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={inputChange}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={inputChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={inputChange}
        />
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={inputChange}
        />
        <button type="submit">Submit</button>
      </form>
        <button onClick={clearAll}>Clear All</button>
      <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>age</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            {list?.map((item, i) => (
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={''} id={i}>Edit</button>
                </td>
                <td>
                  <button onClick={()=>deleteData(i)} id={i}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BasicForm;
