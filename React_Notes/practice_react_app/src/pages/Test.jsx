import React, { useState } from 'react'

const Test = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState({});
    const [submitted, setSubmitted]= useState(false);
    const handleChange = (e)=>{
        const {name, value}= e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setSubmitted(false);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const error = {};
        if(!formData.email.includes('@') || !formData.email.includes('.')){
            error.email = "email is invalid";
        }
        if(formData.password.length < 6){
            error.password = 'Password must be atleast 6 charaters long';
        }
        setError(error);
        if(Object.keys(error).length === 0){
            setSubmitted(true);
            console.log("Form submitted successfully");
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} />
            {error.email && <span>{error.email}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} />
            {error.password && <span>{error.password}</span>}
        </div>
        <button type='submit'>Submit</button>
        {submitted && <p>Form submitted successfully</p>}
    </form>
  )
}

export default Test