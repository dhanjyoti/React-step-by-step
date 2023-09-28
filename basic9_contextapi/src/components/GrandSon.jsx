import React from 'react'

const GrandSon = ({secret}) => {
  return (
    <div>
      <h3>{`Grand son ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  )
}

export default GrandSon;