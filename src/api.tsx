import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    // baseURL: "https://kbz-code-test-kklo-api.herokuapp.com",
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
    request.headers.set('content-type', 'application/json');

    const jwtToken = localStorage.getItem('accessToken');

    if (jwtToken) request.headers.set('Authorization', 'Bearer ' + jwtToken);

    return request;
});

export default api;
