import React from 'react';
import './home.css';
import AppleMusicLogo from "../icons/Apple_music_logo.jpg";
import PlayIcon from '../icons/playIcon';
import TextComponent from '../components/TextComponent';

const Home = () => {
  return (
    <div className='mainContainer'>
        {/* Left sidebar */}
        <div className='leftSidebarContainer'>
            <div>
                <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/>
            </div>
            <div>
              <TextComponent icon={<PlayIcon />} text="Listen Now"/>
              <TextComponent icon={<PlayIcon />} text="Browse"/>
              <TextComponent icon={<PlayIcon />} text="Radio"/>
            </div>
            <div>
              <TextComponent icon={<PlayIcon />} text="Open in Music"/>
            </div>
        </div>

        {/* Right side Hero Section */}
        <div></div>
    </div>
  )
}

export default Home;