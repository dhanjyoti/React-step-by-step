import React, { useEffect, useState } from 'react';

const TableApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://gorest.co.in/public/v2/users")
            .then((result) => result.json())
            .then((response) => {
                console.log("first", response);
                setData(response);
            });
    }, []);

    return (
        <div>
            <h2>Api Data in Table form</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.status}</td>
                            <td>{item.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableApi;
