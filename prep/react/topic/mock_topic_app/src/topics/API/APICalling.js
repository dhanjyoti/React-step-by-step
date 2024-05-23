import React, { useEffect, useState } from "react";

const APICalling = () => {
  const [data, setData] = useState([]);
  const [clickedData, setClickedData] = useState([])

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const handlePrint=(user)=>{
    console.log(user)
    setClickedData((prevClickedData)=> [...prevClickedData, user])
  }
  return (
    <div>
      <h2>Api Calling</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <button onClick={()=>handlePrint(item)}>Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Clicked Data</h3>
      <ol>
          {
            clickedData.map((item)=>(
              <li key={item.id}>
                <span>Name: {item.name}</span>
                <span>Email: {item.email}</span>
                <span>Gender: {item.gender}</span><br/><br/>
              </li>
            ))
          }
      </ol>
    </div>
  );
};

export default APICalling;
