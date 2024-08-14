import axios from 'axios';

    const api = axios.create({
    baseURL: 'http://localhost:3333', 
    });

    export const createNote = (note: { title: string; note: string; favorite: boolean }) => {
    return api.post('/note/create', note);
    };

    export const getNotes = () => {
    return api.get('/note/read');
    };

    export const updateNote = (id: string, note: { title: string; note: string; favorite: boolean; color: string }) => {
    return api.put(`/note/update/${id}`, note);
    };

    export const deleteNote = (id: string) => {
    return api.delete(`/note/delete/${id}`);
    };

export default api;