// bankingService.js
import axiosInstance from '../../../../../api/axiosInstance';

export const submitBankingReport = async (formData) => {
  try {
    const response = await axiosInstance.post('api/reports', formData);

    return response.data;
  } catch (error) {
    console.error("Error submitting banking report:", error);

    // Customize error message for better context
    const errorMessage = error.response
      ? `Failed to submit report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to submit report';

    throw new Error(errorMessage);
  }
};

export const getBankingReports = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/reports/validate', formData);

    return response.data;  // Assuming the API returns the validation result or success message
  } catch (error) {
    console.error("Error fetching banking reports:", error);

    const errorMessage = error.response
      ? `Failed to validate report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to validate report';

    throw new Error(errorMessage);
  }
};

