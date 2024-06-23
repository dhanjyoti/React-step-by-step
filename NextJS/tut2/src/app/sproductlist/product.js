"use client"
import {useState} from 'react';

export default function Product({price}){
    const [showPrice, setShowPrice] = useState(false);

    const handleClick =()=>{
        // setShowPrice(true);
        setShowPrice(prevShowPrice => !prevShowPrice);
    }
    console.log(price)
    return (
        <div>
            <button onClick={handleClick}>Check Price</button>
            {/* <button onClick={()=>alert(`$${price}`)}>Click Price</button> */}
            {showPrice && <p>The price is: ${price}</p>}
        </div>
    )
}