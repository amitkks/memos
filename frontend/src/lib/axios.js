import axios from "axios"

const mode = import.meta.env.VITE_NODE_ENV
console.log(mode)

const BASE_URL = mode === "development" ?  "http://localhost:5001/api" : `${import.meta.env.VITE_PROD_URL}`

const api = axios.create({
    baseURL: BASE_URL, 
})

export default api;