import React, { useEffect, useState } from 'react';
import PasswordInput from '../components/shared/PasswordInput';
import TextInput from '../components/shared/TextInput';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../utils/use-user';
import api from '../utils/api';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const {user, setUser} = useUser();

  useEffect(()=>{
    if(user){
      navigate("./home");
    }
  }, [user]);

  if(user){
    return null;
  }

  const signUp = async () => {
    // Inputs that are required according to the api
    const data = { email, password, name:firstName+" "+lastName, appType: 'music', };

    try{
      let res = await api.signup({data})
      // if the input successful it post/ else it will show the error message
      if (res.status === "success") {
        console.log(res);
        alert("Successful");
        navigate('/login');
      } else {
        alert(res.message);
      }
    } catch(e){
      alert(e?.response?.data?.message)
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center'>
      {/* Spotify Logo */}
      <div className='logo p-4 border-b border-gray-300 w-full flex justify-center'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="180"
          viewBox="-11.05 70.2 777.1 80.5"
        >
          <path
            d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0m192.125 103.08c-19.279-4.598-22.71-7.825-22.71-14.605 0-6.405 6.03-10.714 14.998-10.714 8.693 0 17.312 3.273 26.35 10.012.274.204.616.285.954.232a1.24 1.24 0 00.833-.515l9.413-13.27c.387-.546.282-1.3-.24-1.717-10.756-8.63-22.868-12.826-37.025-12.826-20.816 0-35.356 12.49-35.356 30.365 0 19.167 12.543 25.952 34.217 31.192 18.448 4.25 21.562 7.808 21.562 14.173 0 7.052-6.295 11.436-16.427 11.436-11.253 0-20.432-3.79-30.7-12.682a1.329 1.329 0 00-.927-.302c-.34.028-.65.186-.866.446l-10.555 12.561c-.443.521-.387 1.3.125 1.75 11.947 10.666 26.64 16.3 42.495 16.3 22.432 0 36.925-12.257 36.925-31.226 0-16.032-9.577-24.899-33.066-30.61m100.098 21.486c0 13.537-8.34 22.984-20.28 22.984-11.803 0-20.707-9.876-20.707-22.984 0-13.107 8.904-22.984 20.708-22.984 11.748 0 20.279 9.664 20.279 22.984m-16.283-40.5c-9.723 0-17.697 3.83-24.273 11.676V86.91c0-.697-.566-1.265-1.263-1.265H344.8c-.698 0-1.262.568-1.262 1.265v98.136c0 .697.564 1.265 1.262 1.265h17.26c.698 0 1.264-.568 1.264-1.265v-30.977c6.577 7.382 14.553 10.988 24.273 10.988 18.065 0 36.353-13.907 36.353-40.491 0-26.59-18.288-40.5-36.353-40.5m83.231 63.625c-12.375 0-21.704-9.942-21.704-23.125 0-13.239 9.006-22.845 21.418-22.845 12.454 0 21.847 9.942 21.847 23.134 0 13.236-9.068 22.836-21.561 22.836m0-63.625c-23.266 0-41.492 17.915-41.492 40.79 0 22.625 18.101 40.351 41.206 40.351 23.348 0 41.631-17.854 41.631-40.641 0-22.71-18.157-40.5-41.345-40.5m91.027 1.579H542.86V66.223c0-.697-.562-1.265-1.26-1.265h-17.26c-.698 0-1.266.568-1.266 1.265v19.422h-8.3c-.695 0-1.258.568-1.258 1.265v14.835c0 .697.563 1.265 1.258 1.265h8.3v38.388c0 15.513 7.721 23.38 22.949 23.38 6.192 0 11.33-1.279 16.172-4.024.392-.22.637-.644.637-1.095v-14.128a1.264 1.264 0 00-1.829-1.133c-3.325 1.673-6.54 2.445-10.133 2.445-5.538 0-8.01-2.514-8.01-8.15V103.01h18.996c.698 0 1.259-.568 1.259-1.265V86.91c0-.697-.561-1.265-1.259-1.265m66.182.075v-2.385c0-7.018 2.69-10.147 8.725-10.147 3.6 0 6.49.715 9.727 1.795a1.262 1.262 0 001.66-1.202V59.233a1.26 1.26 0 00-.892-1.21c-3.42-1.018-7.796-2.063-14.348-2.063-15.945 0-24.372 8.98-24.372 25.956v3.653h-8.292a1.27 1.27 0 00-1.268 1.264v14.912c0 .696.57 1.266 1.268 1.266h8.292v59.212c0 .697.563 1.265 1.259 1.265h17.261c.697 0 1.265-.568 1.265-1.265V103.01h16.118l24.69 59.196c-2.804 6.22-5.56 7.457-9.322 7.457-3.042 0-6.244-.908-9.519-2.699a1.29 1.29 0 00-1.005-.094c-.33.116-.607.361-.747.681l-5.85 12.836a1.255 1.255 0 00.542 1.633c6.108 3.308 11.623 4.72 18.436 4.72 12.747 0 19.792-5.937 26.004-21.91l29.948-77.388a1.264 1.264 0 00-1.172-1.723h-17.97a1.27 1.27 0 00-1.197.848L678.87 139.15l-20.164-52.618a1.259 1.259 0 00-1.179-.813zm-38.368-.075h-17.263c-.696 0-1.264.568-1.264 1.265v75.312c0 .697.568 1.265 1.264 1.265h17.263c.696 0 1.265-.568 1.265-1.265V86.91c0-.697-.57-1.265-1.265-1.265m-8.543-34.292c-6.839 0-12.388 5.536-12.388 12.374 0 6.843 5.549 12.386 12.388 12.386 6.836 0 12.38-5.543 12.38-12.386 0-6.838-5.544-12.374-12.38-12.374m151.936 41.783H729.9v4.033h3.163c1.578 0 2.52-.772 2.52-2.017 0-1.313-.942-2.016-2.52-2.016m2.049 5.753l3.437 4.811h-2.897l-3.093-4.412h-2.66v4.412h-2.424V90.95h5.685c2.963 0 4.912 1.515 4.912 4.066 0 2.09-1.208 3.368-2.96 3.873m-2.693-12.184c-6.222 0-10.931 4.947-10.931 11.004 0 6.054 4.675 10.935 10.868 10.935 6.22 0 10.935-4.944 10.935-11.004 0-6.055-4.68-10.935-10.872-10.935m-.063 23.154c-6.832 0-12.148-5.487-12.148-12.15 0-6.662 5.385-12.212 12.21-12.212 6.833 0 12.149 5.486 12.149 12.143 0 6.664-5.382 12.219-12.211 12.219"
            fill="#191414"
          />
        </svg>
      </div>
      <div className="w-1/3 py-10 flex items-center justify-center flex-col">
        {/* I will have my inputs(email, password, etc) and used of signup button */}
        <div className='font-bold mb-4 text-2xl'>
          Sign up for free to start listening.
        </div>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Create a password"
          value={password}
          setValue={setPassword}
        />
        {/* <div className='w-full flex justify-between items-center space-x-8'> */}
          <TextInput
            label="First Name"
            placeholder="First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        {/* </div> */}
        <div className='w-full flex items-center justify-center my-8'>
          <button className='bg-[#47d320] w-full text-lg font-semibold p-3 px-10 rounded-full' onClick={e=>{
            e.preventDefault();
            signUp();
          }}>
            SIGN UP
          </button>
        </div>
        {/* This div is made for the hr-(horizontal line) */}
        <div className='w-full border border-solid border-gray-300'></div>
        <div className='my-6 font-semibold text-lg'>
          Already have an account?
        </div>
        <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
          <Link to='/login'>LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup;
