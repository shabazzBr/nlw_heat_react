import axios from "axios";

const api = axios.create({
    baseURL:'http://127.0.0.1:8089/',
})

export  { api };