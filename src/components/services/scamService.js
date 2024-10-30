// src/services/scamService.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api'; // Use environment variable for flexibility

export const submitScamReport = async (reportData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reports/submit`, reportData);
        // Optionally validate response structure
        return response.data; // Return the response data from the server
    } catch (error) {
        // Handle error (logging, notification, etc.)
        console.error('Error submitting scam report:', error);
        throw new Error('Failed to submit report. Please try again later.');
    }
};

export const checkForScam = async (checkData) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/scamCheck/check`, { params: checkData });
        // Optionally validate response structure
        return response.data; // Return the response data from the server
    } catch (error) {
        // Handle error (logging, notification, etc.)
        console.error('Error checking for scams:', error);
        throw new Error('Failed to check for scams. Please try again later.');
    }
};