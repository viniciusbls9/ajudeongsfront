import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ajudeongsback.herokuapp.com/'
});

export default api;
