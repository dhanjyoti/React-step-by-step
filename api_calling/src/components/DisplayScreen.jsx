import React from 'react';
import './displayScreen.css';
import User from './User';
import Favourite from './Favourite';
import Contact from './Contact';

const DisplayScreen = ({ currentActiveMenu, setFav, fav }) => {
    return (
        <div className='displayScreenContainer'>
            {currentActiveMenu === "User" ? (
                <>
                    <User setFav={setFav} fav={fav} />
                </>
            ) : currentActiveMenu === "Favourite" ? (
                <>
                    <Favourite fav={fav} />
                </>
            ) : currentActiveMenu === "Contact" ? (
                <>
                    <Contact />
                </>
            ) : null}
        </div>
    )
}

export default DisplayScreen