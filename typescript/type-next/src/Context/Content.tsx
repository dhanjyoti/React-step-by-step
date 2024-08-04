import React, { useContext } from 'react'
import { StyleObjContext } from './StyleContext'

export default function Content() {
    const theme = useContext(StyleObjContext)
  return (
    <div style={{color: theme.style1.theme}}>Content</div>
  )
}
 