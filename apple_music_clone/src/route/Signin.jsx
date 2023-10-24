import React from 'react';
import MusicIcon from '../icons/newMusicIcon.jpg';
import Input from '../components/Input';
import './styleSignin.css';

const Signin = () => {
    return (
        <div className='signinContainer'>
            <div><img src={MusicIcon} alt='Music_Icon' /></div>
            <h1>Sign In or Sign Up</h1>
            <p>Enter your email to get started.</p>
            <Input name={"email"} type={"email"} placeholder={"Email or Apple ID"} />
            <Input name={"password"} type={"password"} placeholder={"Email a Password"} />
            <button className='continueButton'>Continue</button>
        </div>
    )
}

export default Signin