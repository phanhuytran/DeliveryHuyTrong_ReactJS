import axios from 'axios';
import cookies from 'react-cookies';

export let endpoints = {
    'login': '/o/token/',
    'oauth2-info': '/oauth2-info/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'shippers': '/shippers/',
    'posts': '/posts/',
    // 'post-detail': (postID) => `/posts/${postID}/`,
    'stocks': '/stocks/',
    'image-item': '/image-item/'
}

export let AuthAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
    }
})

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})