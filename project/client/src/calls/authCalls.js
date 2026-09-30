import axios from 'axios'
import { API_BASE_URL } from './config.js'

//to make calls we need to define an instance from axios

const api = axios.create({
    baseURL: API_BASE_URL
})

export const register = async(values)=>{
    try {
        const response = await api.post('/api/auth/register', values);
        console.log(response.data)
    } catch (error) {
        console.log(error)
        
    }
}