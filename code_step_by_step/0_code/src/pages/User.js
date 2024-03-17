import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const {name} = params;
    console.log(name)
  return (
    <div>
        <h2>This is {name} page</h2>
    </div>
  )
}

export default User