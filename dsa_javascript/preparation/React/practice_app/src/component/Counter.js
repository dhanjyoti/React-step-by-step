import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <ul>{props.count.map((item, i)=>(
        <li key={i}>{item * 2}</li>
      ))}</ul>
    </div>

  )
}

export default Counter