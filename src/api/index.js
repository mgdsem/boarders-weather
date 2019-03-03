import axios from 'axios';

import { API_KEY } from '../secrets/keys';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const getWeather = (city) => api.get(`/weather?q=${city},pl&appid=${API_KEY}`);