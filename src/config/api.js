import axios from 'axios';

const grapeVineAPI = axios.create({
    baseURL: 'http://localhost:4000'
})

export default grapeVineAPI
