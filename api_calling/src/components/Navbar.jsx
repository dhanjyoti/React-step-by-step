import React from 'react';
import './navbar.css';

const Navbar = ({setCurrentActiveMenu}) => {
  return (
    <div className='navbarContainer'>
        <ul className='navbarList'>
            <li onClick={()=>{
                setCurrentActiveMenu("User")
            }} className='listItem'>User</li>
            <li onClick={()=>{
                setCurrentActiveMenu("Favourite")
            }} className='listItem'>Favourite</li>
            <li onClick={()=>{
                setCurrentActiveMenu("Contact")
            }} className='listItem'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar