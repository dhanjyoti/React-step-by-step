// "use client"
// import React, { useState } from 'react'

// export default function Page() {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [email, setEmail] = useState("");

//     const addUser = async()=>{
//         let response = await fetch("http://localhost:3000/api/users", {
//             method: "Post",
//             body:JSON.stringify({name, age, email})
//         }) 
//         response = await response.json();
//         if(response.success){
//             alert("new user added")
//         } else {
//             alert("some error with data, try again")
//         }
//         console.log(response)
//     }
//   return (
//     <div className='flex flex-col items-center'>
//         <h1>Add new User</h1>
//         <input type='text' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
//         <input type='age' value={age} placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
//         <input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
//         <button onClick={addUser}>Add User</button>
//     </div>
//   )
// }




"use client";
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const addUser = async (data) => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      // Success actions
      if (data.success) {
        console.log("New user added");
        // Perform any other success actions such as redirecting, resetting form, etc.
        setName("");
        setAge("");
        setEmail("");
      } else {
        console.log("Some error with data, try again");
        // Perform any other error handling
      }
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      // Error actions
      console.error("An error occurred:", error);
      // Perform any other error handling such as showing error messages
    },
  });
  
  const handleSubmit = () => {
    mutation.mutate({ name, age, email });
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>Add new User</h1>
      <input type='text' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      <input type='number' value={age} placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
      <input type='email' value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Adding...' : 'Add User'}
      </button>
    </div>
  );
}
