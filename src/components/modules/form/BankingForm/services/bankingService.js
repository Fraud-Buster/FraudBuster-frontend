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
