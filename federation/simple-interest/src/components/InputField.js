import React from 'react';

const InputField =({label, value, onChange})=>{
    return (
        <div>
            <label>{label} </label>
            <input className='border-2 border-black text-black' type='number' value={value} onChange={onChange}/>
        </div>
    )
}
export default InputField;
