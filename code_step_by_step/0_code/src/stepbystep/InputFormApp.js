import React, { useState } from 'react'

const InputFormApp = () => {
    const [list, setList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        current: '',
        subject: ''
    });
    // const handleAdd =()=>{
    //     setInputValue('')
    // }

    const handleChange =(e)=>{
        const {name, value} = e.target;
        console.log(name, value)
        setFormData(prevData =>({...prevData, [name]: value}));
    }

    const submission =(e)=>{
        e.preventDefault();
        setList([...list, formData])
        console.log(formData)
        setFormData({
            name: '',
            age: '',
            gender: '',
            current: '',
            subject: ''
        })
    }
  return (
    <div>
        <h2>Form App</h2>
        <form onSubmit={submission}>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Age</label>
                <input type='number' name='age' value={formData.age} onChange={handleChange}/>
            </div>
            <div>
                <label>Male</label>
                <input type='radio' name='gender' value='male' onChange={handleChange}/>
                <br/>
                <label>Female</label>
                <input type='radio' name='gender' value='female' onChange={handleChange}/>
            </div>
            <div>
                <label>School</label>&nbsp;
                <input type='checkbox' name='current' value='School' onChange={handleChange}/>&nbsp;&nbsp;&nbsp;
                <label>Midterms</label>&nbsp;
                <input type='checkbox' name='current' value='Midterms' onChange={handleChange}/>&nbsp;&nbsp;&nbsp;
                <label>College</label>&nbsp;
                <input type='checkbox' name='current' value='College' onChange={handleChange}/>
            </div>
            <div>
                <label>Subject</label>
                <select onChange={handleChange} name='subject'>
                    <option value=''>Option</option>
                    <option value='Mathematics'>Mathematics</option>
                    <option value='English'>English</option>
                    <option value='Physics'>Physics</option>
                    <option value='Banking'>Banking</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <div>
            {list?.map((item, index)=>(
                <div key={index}>
                    <h3>Form Data</h3>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Current Status: {item.current}</p>
                    <p>Subject: {item.subject}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InputFormApp