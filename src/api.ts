import axios from 'axios';

const BASE = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
    getAllAlbums: async () => {
        let response = await BASE('/albums');
        return response.data;
    },
    getAlbum: async (id: string) => {
        let response = await BASE(`/albums/${id}`);
        return response.data;
    },
    getAllPhotos: async (id: string) => {
        let response = await BASE(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        let response = await BASE(`/photos/${id}`);
        return response.data;
    }
};