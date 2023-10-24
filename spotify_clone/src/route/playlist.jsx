import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../utils/api"

const Playlist = ()=>{
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const [album, setAlbum]=useState({})
    useEffect(()=>{
        (async()=>{
           try{
            let res =  await api.getAlbum(id)
            setAlbum(res.data)   
        }catch(e){
            alert(e)
           }
        })()
    },[searchParams])

    return album && <div>
        <img src={album.image}/>
        <div>
            {album.songs?.map((s)=>{
                return <div>{s.title}</div>
            })}
        </div>
    </div>
}

export default Playlist