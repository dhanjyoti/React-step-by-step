import React from 'react'
import { useUser } from './CommonContext'

const About = () => {
    const {color} = useUser();
  return (
    <div style={{backgroundColor:color}}>
        This is about page.
    </div>
  )
}

export default About