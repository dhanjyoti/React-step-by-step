import React from 'react';
import AppleLogo from '../icons/AppleLogo';
import './styleSignup.css';
import Input from '../components/Input';

const Signup = () => {
  return (
    <div className='container'>
        <div><AppleLogo /></div>
        <h1>Sign in or Sign up</h1>
        <h2>Create Apple ID</h2>
        <Input name={"email"} type={"email"} placeholder={"Enter Apple ID or Email"} />
        <Input name={"password"} type={"password"} placeholder={"Enter a Password"} />
        <Input name={"first_name"} type={"text"} placeholder={"Enter your first name"} />
        <Input name={"last_name"} type={"text"} placeholder={"Enter your last name"} />
        <button>Continue</button>
    </div>
  )
}

export default Signup;