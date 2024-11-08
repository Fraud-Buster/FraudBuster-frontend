// khaltiService.js
import axiosInstance from '../../../../../api/axiosInstance';

export const submitKhaltiReport = async (formData) => {
  try {
    const response = await axiosInstance.post('api/reports/khalti', formData);

    return response.data;
  } catch (error) {
    console.error("Error submitting KHALTI report:", error);

   
    const errorMessage = error.response
      ? `Failed to submit report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to submit report';

    throw new Error(errorMessage);
  }
};

export const getKhaltiReports = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/reports/khalti/validate', formData);

    return response.data;
  } catch (error) {
    console.error("Error fetching KHALTI reports:", error);

    const errorMessage = error.response
      ? `Failed to validate report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to validate report';

    throw new Error(errorMessage);
  }
};