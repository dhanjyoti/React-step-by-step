import React from 'react'

const HocRed = (props) => {
  return (
    <div style={{backgroundColor:"red", width:"100px"}}>
        <props.cmp/>
    </div>
  )
}

export default HocRed