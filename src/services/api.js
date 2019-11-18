import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:14575/api/',
});

export default api;
