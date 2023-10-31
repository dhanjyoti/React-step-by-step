import React from 'react'

const SubscriptionCard = ({icon, headText, info}) => {
  return (
    <div className='flex flex-col items-center gap-4 w-[270px] text-center'>
        <img src={icon} alt='icon' className='h-36 w-36'/>
        <h3>{headText}</h3>
        <p>{info}</p>
    </div>
  )
}

export default SubscriptionCard