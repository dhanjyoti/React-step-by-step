import React from 'react'

const Profile = (props) => {
  return (
    <div>
        <div>{props.text}</div>
        <p>{props.data.name}</p>
    </div>
  )
}

export default Profile