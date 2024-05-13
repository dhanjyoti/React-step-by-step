import React from 'react'
import HocRed from './HocRed'
import Counter from './Counter'
import HocBlue from './HocBlue'

const Higher = () => {
  return (
    <div>
        <div>HOC</div>
        <HocRed cmp={Counter} />
        <HocBlue cmp={Counter} />
        <HocBlue cmp={Counter} />
    </div>
  )
}

export default Higher