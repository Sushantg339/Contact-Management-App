import axios from "axios";
const api = axios.create({
    baseURL : 'https://contact-management-app-1q8x.onrender.com/api',
    withCredentials : false
})

export default api