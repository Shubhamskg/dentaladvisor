import axios from "axios";

let origin="http://localhost:5000"
const instance = axios.create({
    baseURL:'https://api.dentaladvisor.ai',
    withCredentials: true
})

export default instance