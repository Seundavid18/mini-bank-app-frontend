import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://chasebankappbackend.netlify.app/api"
    // baseURL: "http://localhost:5000/api"
})