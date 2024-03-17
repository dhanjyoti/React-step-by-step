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

    const handleChange =(e)=>{
        const {name, value} = e.target;
        console.log(e)
        console.log(name, value)
        setFormData((prevData) =>({...prevData, [name]: value}));
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

    const handleDelete=(id)=>{
        const data = list.filter((_, index)=> index !== id)
        setList(data);
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
                <input type='radio' name='gender' value='male' checked={formData.gender == 'male'} onChange={handleChange}/>
                <br/>
                <label>Female</label>
                <input type='radio' name='gender' value='female' checked={formData.gender == 'female'} onChange={handleChange}/>
            </div>
            <div>
                <label>School</label>&nbsp;
                <input type='checkbox' name='current' value='School' checked={formData.current == "School"} onChange={handleChange}/>&nbsp;&nbsp;&nbsp;
                <label>Midterms</label>&nbsp;
                <input type='checkbox' name='current' value='Midterms' checked={formData.current == "Midterms"} onChange={handleChange}/>&nbsp;&nbsp;&nbsp;
                <label>College</label>&nbsp;
                <input type='checkbox' name='current' value='College' checked={formData.current == "College"} onChange={handleChange}/>
            </div>
            <div>
                <label>Subject</label>
                <select onChange={handleChange} name='subject' value={formData.subject}>
                    <option value=''>Option</option>
                    <option value='Mathematics'>Mathematics</option>
                    <option value='English'>English</option>
                    <option value='Physics'>Physics</option>
                    <option value='Banking'>Banking</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Age</th>&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Gender</th>&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Current Status</th>&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Subject</th>&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>{item.age}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>{item.gender}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>{item.current}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>{item.subject}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default InputFormApp