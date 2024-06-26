import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav style={{display:"flex", gap:"50px"}}>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/search'>Search</Link>
            </div>
            <div>
                <Link to='/basicform'>Form</Link>
            </div>
            <div>
                <Link to='/contact'>Contact</Link>
            </div>
            <div>
                <Link to='/details'>Details</Link>
            </div>
            <div>
                <Link to='/test12'>Test</Link>
            </div>
        </nav>
    </div>
  )
}

export default Header