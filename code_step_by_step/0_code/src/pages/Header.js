import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <navbar style={{display:"flex", gap:"50px"}}>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/api'>API</Link>
            </div>
            <div>
                <Link to='/details'>Details</Link>
            </div>
            <div>
                <Link to='/test12'>Test</Link>
            </div>
        </navbar>
    </div>
  )
}

export default Header