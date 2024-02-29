import React, { useEffect, useState } from "react";

const FormValidation2 = () => {
  const initialValue = { username: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
    console.log(e.target);
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
    console.log(formValue);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  }

  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
        console.log(formValue)
    }
  },[formError]);

  const validate = (value)=>{
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!value.username){
        error.username = "Username is required!";
    }
    if(!value.email){
        error.email = "Email is required!";
    } else if(!regex.test(value.email)){
        error.email = "this is not a valid email format!"
    }
    if(!value.password){
        error.password = "Password is required!";
    } else if(value.password.length<4 || value.password.length>10  ){
        error.password = "password need to have minimum 4 and maximum 10 characher!";
    }
    return error;
  } 
  return (
    <div>
        {Object.keys(formError).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
        ):(
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
        )}
        
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div></div>
        <div>
          <div>
            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                placeholder="Username"
                value={formValue.username} 
                onChange={handleChange}
            />
          </div>
          <p>{formError.username}</p>
          <div>
            <label>Email</label>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formValue.email}
                onChange={handleChange}
            />
          </div>
          <p>{formError.email}</p>
          <div>
            <label>Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formValue.password}
                onChange={handleChange}
            />
          </div>
          <p>{formError.password}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation2;
