import React from 'react'
import SubscriptionCard from '../components/SubscriptionCard';
import AddFree from '../images/addFree.png';
import MusicDownload from '../images/musicDownload.jpeg';
import EveryMusic from '../images/everyMusic.png';
import Pay from '../images/pay.png';

const Subscription = () => {
    return (
        <div>
            {/* // Part 1 */}
            <div className='flex flex-col items-center bg-blue-600 text-white pt-28 pb-24 gap-10'>
                <p className='text-3xl font-semibold'>Get Premium free for 1 month</p>
                <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
                <div className='flex gap-2'>
                    <button className="bg-black py-2 px-7 rounded-full font-semibold" >Get Started</button>
                    <button className="border-2 border-white py-3 px-7 rounded-full font-semibold" >See other plans</button>
                </div>
                <p className='text-xs'>
                    <span className='hover:cursor-pointer'>
                        <u>Terms and conditions apply</u>. </span> 
                    1 month free not available for users who have already tried Premium.
                </p>
            </div>

            {/* // Part 2 */}
            <div className='flex flex-col items-center'>
                <h1>The power of Premium</h1>
                <div className='flex flex-row justify-between'>
                    <SubscriptionCard icon={AddFree} headText="Ad-free music listening" info="Enjoy uninterrupted music." />
                    <SubscriptionCard icon={MusicDownload} headText="Offline playback" info="Save your data by listening offline." />
                    <SubscriptionCard icon={EveryMusic} headText="Play everywhere" info="Listen on your speakers, TV, and other favorite devices." />
                    <SubscriptionCard icon={Pay} headText="Pay your way" info="Prepay with Paytm, UPI, and more." />
                </div>
            </div>

            {/* // Part 3 */}
            <div></div>

            {/* // Part 4 */}
            <div></div>
        </div>
    )
}

export default Subscription;