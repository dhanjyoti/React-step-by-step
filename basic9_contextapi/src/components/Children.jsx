import React from 'react'
import GrandSon from './GrandSon'
import GrandDaughter from './GrandDaughter'

const Children = ({secret}) => {
  return (
    <div>
        <h2>{`Children ${secret.familyName}`}</h2>
        <GrandSon secret={secret} />
        <GrandDaughter secret={secret} />
    </div>
  )
}

export default Children