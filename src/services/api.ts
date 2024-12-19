import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendMessage = async (message: string) => {
    const response = await apiClient.post('/api/chat', { message });
    return response.data;
};
