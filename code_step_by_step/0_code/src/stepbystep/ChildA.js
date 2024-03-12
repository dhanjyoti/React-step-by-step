import React, { memo } from 'react'

const ChildA = ({learning, count}) => {
    console.log("child component")
  return (
    <div></div>
  )
}

export default memo(ChildA)