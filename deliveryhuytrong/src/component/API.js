import axios from 'axios';
import cookies from 'react-cookies';

export let endpoints = {
    'login': 'o/token/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'posts': '/posts/',
    'stocks': '/stocks/',
}

export let AuthAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
    }
})

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})