import React from 'react';
import './home.css';
import AppleMusicLogo from "../icons/Apple_music_logo.jpg";

const Home = () => {
  return (
    <div className='mainContainer'>
        {/* Left sidebar */}
        <div className='leftSidebarContainer'>
            <div>
                <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/>
            </div>
            home
        </div>

        {/* Right side Hero Section */}
        <div></div>
    </div>
  )
}

export default Home;