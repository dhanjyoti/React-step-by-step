import React from 'react'

const GrandDaughter = ({secret}) => {
  return (
    <div>
      <h3>{`Grand daughter ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  )
}

export default GrandDaughter