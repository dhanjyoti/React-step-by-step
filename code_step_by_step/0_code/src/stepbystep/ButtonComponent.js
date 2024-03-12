import React, { memo } from 'react'

const ButtonComponent = ({incrementCount}) => {
    console.log("re-rended")
  return (
        <button onClick={incrementCount}>Click Count</button>
  )
}

export default memo(ButtonComponent)