import axios from "axios";

const http = axios.create({
    baseURL: 'https://academics.newtonschool.co/api/v1/',
    headers: {
        'projectId': 'f104bi07c490',
    }
});

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    try{
        config.headers.Authorization = "Bearer "+localStorage.getItem('user')?.token
    }catch{
        
    }finally{
        return config;
    }
    
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default http;