import axios, { AxiosRequestConfig } from 'axios';

const apiEndpoint = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getAlbums = (config: AxiosRequestConfig) => apiEndpoint.get("albums", config);

export const downloadImage = (config: AxiosRequestConfig) => apiEndpoint.get(
    "https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg",
    config
);
