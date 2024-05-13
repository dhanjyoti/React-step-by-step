import React from 'react'

const HocBlue = (props) => {
  return (
    <div style={{backgroundColor:"blue", width:"100px"}}>
        <props.cmp/>
    </div>
  )
}

export default HocBlue