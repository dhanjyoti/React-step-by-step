import React from 'react'

interface MyProp {
    name: string
}

const MyChild = ({name}:MyProp) => {

  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default MyChild