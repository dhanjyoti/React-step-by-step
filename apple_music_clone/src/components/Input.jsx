import React from 'react'
import './styleInput.css'

const Input = (name, type, value, placeholder) => {
  return (
    <div>
        <input name={name} type={type} value={value} placeholder={placeholder} />
    </div>
  )
}

export default Input;