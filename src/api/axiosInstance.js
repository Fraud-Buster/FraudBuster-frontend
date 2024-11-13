// fraudbuster-frontend/src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.fraudbuster.xyz', // Update this to your live backend API URL
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;