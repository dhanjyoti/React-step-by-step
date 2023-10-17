import React, { useEffect, useState } from 'react';
import './user.css';

const Favourite = ({ fav }) => {
  
  useEffect(()=> {
    // localStorage.setItem("favlist", JSON.stringify(fav));
    setInitialList(JSON.parse(localStorage.getItem("favlist")))
  },[fav]);

  const [initialList, setInitialList] = useState(JSON.parse(localStorage.getItem("favlist")));

  return (
    <div className='userContainer'>
      {initialList.length > 0 && initialList.map((ele, idx) => {
        return (<>
          <div className='card' key={idx}>
            <img src="" alt="" />
            <h1>{ele.login}</h1>
            <button>Remove</button>
          </div>
        </>)
      })}
    </div>
  )
}

export default Favourite