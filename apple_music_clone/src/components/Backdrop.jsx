import React from 'react';
import './styleBackdrop.css';

const Backdrop = ({children, backdrop = true}) => {
    const getClassName = () => {
        return (
            backdrop ? "backdrop" : "backdrop-no"
        )
    }
    return (
        <div className={getClassName()}>{children}</div>
    )
}

export default Backdrop