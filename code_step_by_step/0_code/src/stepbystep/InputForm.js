import React from 'react'

const InputForm = ({label, data, onChange}) => {
  return (
    <div>
        <label>{label}</label>
        <input type='name' value={data} onChange={onChange} />
    </div>
  )
}

export default InputForm