import React, { useState } from 'react';
import './styleHome.css';
// import AppleMusicLogo from "../icons/Apple_music_logo.jpg";
import LogoIcon from '../icons/logoIcon';
import PlayIcon from '../icons/playIcon';
import Browse from '../icons/browseIcon'
import Radio from '../icons/radioIcon'
import MusicIcon from '../icons/musicIcon'
import Image from '../icons/large.webp'
// import searchIcon from '../icons/searchIcon';
import TextComponent from '../components/TextComponent';
import Signup from './Signup';
import Popup from '../components/Popup';
import Subscription from './Subscription';

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [showSubscribe, setShowSubscribe] =useState("");

  return (
    <div className='mainContainer'>
        {/* Left sidebar */}
        <div className='leftSidebarContainer'>
          <div className='sidebarContainer'>
            <div>
                {/* <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/> */}
                <LogoIcon/>
            </div>
            <div>
              <input type='search' placeholder='Search'/>
            </div>
            <div className='iconDiv'>
              <TextComponent icon={<PlayIcon />} text="Listen Now"/>
              <TextComponent icon={<Browse />} text="Browse"/>
              <TextComponent icon={<Radio />} text="Radio"/>
            </div>
          </div>
              {/* Horizontal line */}
              <hr />
            <div className='sidebarContainer'>
              <TextComponent icon={<MusicIcon />} text="Open in Music"/>
            </div>
        </div>

        {/* Right side Hero Section */}
        <div className='rightSideContainer'>
          <div className='topBar'>
            <button className='subscribeButton' onClick={()=> {
              setShowSubscribe(true)
            }}>Subscribe</button>
          </div>
          <div className='heroSection'>
            <div>
              <LogoIcon />
              {/* <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/> */}
            </div>
            <div>
              <span className='headline'>Discover new music everyday.</span>
            </div>
            <div className='notes'>
              <span>Get playlists and albums inspired by the artists and</span>
              <span>genres you're listening to. 1 month free, then</span>
              <span>$10.99/month.</span>
            </div>
            <button className='tryButton' onClick={()=> {
              setShowSignUp(true)
            }}>Try it Free</button>
            <div className='imageContainer'>
              <img className='image' src={Image} alt='image'/>
            </div>
          </div>
        </div>
        
        <Popup show={showSubscribe} 
        onClose={()=>{
          setShowSubscribe(false) // if this onClose is not passed it will not work for the second time
        }}>
          <Subscription />
        </Popup>

        <Popup show={showSignUp} 
        onClose={()=>{
          setShowSignUp(false) // if this onClose is not passed it will not work for the second time
        }}
        >
          <Signup />
        </Popup>
    </div>
  )
}

export default Home;