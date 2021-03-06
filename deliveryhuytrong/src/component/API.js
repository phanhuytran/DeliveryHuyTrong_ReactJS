import axios from 'axios';
import cookies from 'react-cookies';

export let endpoints = {
    'login': '/o/token/',
    'oauth2-info': '/oauth2-info/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'shippers': '/shippers/',
    'shipper-average-rate': (id) => `/shippers/${id}/average-rate/`,
    'posts': '/posts/',
    'stocks': '/stocks/',
    'image-item': '/image-item/',
    'post-auctions': (id) => `/posts/${id}/auctions/`,
    'auctions': '/auctions/',
    'orders': '/orders/',
    'change-shipping-status': (id) => `/orders/${id}/update-status/`,
    'rates': '/rates/',
    'edit-rates': (id) => `/rates/${id}/`,
    'check-rate': '/rates/check-rate/',
    'vouchers': '/vouchers/'
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