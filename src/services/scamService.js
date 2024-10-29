// src/services/scamService.js
import axiosInstance from '../api/axiosInstance';

// Function to submit a scam report
export const submitScamReport = async (reportData) => {
    try {
        const response = await axiosInstance.post('/api/reports', reportData);
        return response.data;
    } catch (error) {
        console.error("Submit Scam Report Error:", error); // Log error details for debugging
        throw error.response?.data || { message: "An error occurred while submitting the report." };
    }
};

// Function to fetch scam reports (optional)
export const fetchScamReports = async () => {
    try {
        const response = await axiosInstance.get('/api/reports');
        return response.data;
    } catch (error) {
        console.error("Fetch Scam Reports Error:", error); // Log error details for debugging
        throw error.response?.data || { message: "An error occurred while fetching the reports." };
    }
};