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
                return <div>
                    <div className="flex flex-row justify-evenly items-center border-2 border-slate-400 bg-slate-400">
                        <div>1</div>
                        <div><img className="w-10" src={s.thumbnail} alt="thumbnail" /></div>
                        <div>
                            <div>{s.title}</div>
                            <div>singer</div>
                        </div>
                        <div>{s.mood}</div>
                        <div>{s.dateOfRelease}</div>
                        <div>time</div>
                    </div>




                    {/* {s.title} */}
                </div>
            })}
        </div>
    </div>
}

export default Playlist