import { useState } from "react"
import Callback from "./callback";

export default function Card(){
  const [UIcolor, setUIcolor] = useState(null);
  const getColor= (color)=>{
    setUIcolor(color);
  }
  return (
    <div>
      <div className="w-60 h-60 border-2" style={{background:`${UIcolor}`}}></div>
      <Callback className="bg-gray" getColor={getColor}/>
    </div>
  )
}