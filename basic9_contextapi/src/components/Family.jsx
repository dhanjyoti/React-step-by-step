import React from 'react'
import Parent from './Parent'

const Family = ({secret}) => {
  return (
    <div>
        <Parent secret={secret} />
    </div>
  )
}

export default Family