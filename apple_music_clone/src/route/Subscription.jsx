import React from 'react';
import Handshake from '../icons/handshake';
import NewMusicIcon from '../icons/newMusicIcon.jpg';
import './styleSubscription.css';

const Subscription = () => {
  return (
    <div className='subscriptionContainer'>
        <h1>Your Subscription Details</h1>
        <div className='packageInfo'>
            <div className='firstDiv'>
                <div>
                    <img className='newMusicIcon' src={NewMusicIcon} alt='music_icon'/>
                </div>
                <div className='insideFirstDiv'>
                    <div>Apple Music</div>
                    <div>Individual </div>
                </div>
            </div>
                <hr />
            <div className='secondDiv para'>
                <span>No commitment. Cancel at any time in Settings atleast one day before each</span>
                <span>renewal date. Plan automatically renews until cancelled.</span>
            </div>
                <hr />
            <div className='thirdDiv'>
                <span>1 month Trial</span>
                <span className='para'>Starting today</span>
            </div>
            <div className='fourthDiv'>
                <span>₹99 per month</span>
                <span className='para'>Starting 20 Nov 2023</span>
            </div>
        </div>
        <div>
            <Handshake />
        </div>
        <div className='spanContainer para'>
            <span>Your searches, browsing and purchases and device trust score help improve the service</span>
            <span>and prevent fraud. If you subscribe, we also use your music library and what you play</span>
            <span>to personalize your experience and send your notifications.</span>
        </div>
        <div>
            <span className='lastPara'>See how your data is managed...</span>
        </div>
        <button className='subscribe'>Subscribe</button>
    </div>
  )
}

export default Subscription;