import axios, {AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { url } from './helper';

const api = axios.create({
    baseURL:url,
    headers: {
        'Content-Type': 'application/json'
    }
});
api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken && config.headers) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => {
        Promise.reject(error);
    }
);

export default api;
