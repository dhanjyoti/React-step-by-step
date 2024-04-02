import React from 'react'
import { useUser } from './CommonContext'

const Component3 = () => {
    const {counter} = useUser()
  return (
    <h2 style={{backgroundColor:'yellowgreen'}}>The Counter: {counter}</h2>
  )
}

export default Component3