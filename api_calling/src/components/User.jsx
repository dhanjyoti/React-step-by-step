import React, { useEffect, useState } from 'react';
import './user.css';

const User = ({setFav, fav}) => {

    // const [fetched, setFetched]=useState(false)

    // useEffect(() => {
    //     if(!fetched){
    //         getData()
    //         setFetched(true)
    //     }
    // }, []);

    // const getData = async () => {
    //    try{
    //     const promise = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
    //         headers:
    //             {
    //                 'projectId': 'f104bi07c490'
    //             }
    //         });
    //     const data = await promise.json();
    //     console.log(data);
    //    }catch(e){
    //     console.log(e);
    //    }
    // }
    
    const [userList, setUserList] = useState([]);

    useEffect(()=> {
        getData();
    },[]);

    const getData = async () => {
        const promise = await fetch("https://api.github.com/users");
        const data = await promise.json();
        setUserList(data);
    }

    return (
        <>
            <div className='userContainer'>
                {userList.length > 0 && 
                    userList.map((ele, idx) => {
                    return (
                        <div className='card' key={idx}>
                            <img src="" alt="" />
                            <h1>{ele.login}</h1>
                            <button onClick={()=> {
                                setFav([...fav,ele])
                                localStorage.setItem("favlist", JSON.stringify(fav));
                            }}>Add</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default User