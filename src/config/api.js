import axios from 'axios';

const wineAPI = axios.create({
    baseURL: 'http://localhost:4000'
})

export default wineAPI
