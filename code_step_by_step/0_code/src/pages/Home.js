import React, { useContext } from 'react'
import { CommonContext } from '../component/CommonContext'
import { useUser } from '../utils/UserProvider'

const Home = () => {
  // const x = useContext(CommonContext)

  const {color, updateColor} = useUser()

  return (
    <div style={{background:color}}>
    Home page
    <button onClick={()=>{
      updateColor()
    }}>change</button>
</div>
  )
}

export default Home