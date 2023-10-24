import http from "./http";

const signup = async ({data})=> {
    return (await http.post("/user/signup", data)).data
}

const login = async ({data})=> {
    return (await http.post("/user/login", data)).data
}

const getSong = async ({data})=> {
    return (await http.get("/music/song", data)).data
}

const getAlbums = async ()=>{
    return (await http.get('/music/album?limit=15&sort={"release":-1}')).data
}

const getSongs = async (albumId)=>{
    return (await http.get(`/music/songs?limit=100&filter={"album":${albumId}}`)).data
}

const getAlbum = async (id)=>{
    return (await http.get(`/music/album/${id}`)).data
}
const api = {
    signup,
    login,
    getSong,
    getAlbums,
    getAlbum,
    getSongs
}

export default api;