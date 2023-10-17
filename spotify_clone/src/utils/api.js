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

const api = {
    signup,
    login,
    getSong
}

export default api;