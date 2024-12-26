import axios from 'axios';
const axiosclient = axios.create(
    {
        baseURL:'http://localhost:8080/api',
        headers:{
            'Content-Type': 'application/json'
        }
    }
)
axiosclient.interceptors.request.use(
    // config => {
    //     const token = getToken();
    //     if (token) {
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   error => Promise.reject(error)

)
export default axiosclient;