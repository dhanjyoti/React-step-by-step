import React from "react";
import { Table } from "react-bootstrap";

const NestedList = () => {
  const user = [
    {
      name: "anil",
      email: "anil@gmail.com",
      contact: 111,
      address: [
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
      ],
    },
    {
      name: "soam",
      email: "soam@gmail.com",
      contact: 222,
      address: [
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
      ],
    },
    {
      name: "dru",
      email: "dru@gmail.com",
      contact: 321,
      address: [
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
      ],
    },
    {
      name: "jaf",
      email: "anil@gmail.com",
      contact: 123,
      address: [
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
        { Hn: 10, city: "ghy", country: "India" },
      ],
    },
  ];
  return (
    <div>
      <h1>List with Bootstrap</h1>
      <Table striped bordered variant="dark">
        <tbody>
          <tr>
            <td>Sl. no</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <Table striped bordered variant="dark">
                  <tbody>
                    {item.address.map((data, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NestedList;
