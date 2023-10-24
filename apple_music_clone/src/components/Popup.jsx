import React, { useEffect, useState } from 'react';
import Backdrop from './Backdrop';
import './stylePopup.css';
import CrossIcon from '../icons/crossIcon';
import SingleAppleIcon from '../icons/singleApple';

const Popup = ({children, backdrop = true, show, onClose}) => {
    const [_show, _setShow] = useState(false);
    useEffect(()=> {
        _setShow(show);
    }, [show]);


    useEffect(()=> {
        if(!_show){
            onClose?.()  // if onClose is not passed then it will not show error 
        }
    }, [_show])

    if(!_show){
        return null;
    }

  return (
        <Backdrop backdrop={backdrop}>
            <div className='popup-body'>
                <div className='popupHeader'>
                    <div className='crossButton' onClick={()=>{
                        _setShow(false)
                    }}>
                        <CrossIcon />
                    </div>
                    <div>
                        <SingleAppleIcon />
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </Backdrop>
    )
}

export default Popup