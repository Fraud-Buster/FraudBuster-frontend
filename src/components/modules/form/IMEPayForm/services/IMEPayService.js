// imepayService.js
import axiosInstance from '../../../../../api/axiosInstance';

export const submitIMEPayReport = async (formData) => {
  try {
    const response = await axiosInstance.post('api/reports/imepay', formData);

    return response.data;
  } catch (error) {
    console.error("Error submitting IMEPAY report:", error);

    const errorMessage = error.response
      ? `Failed to submit report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to submit report';

    throw new Error(errorMessage);
  }
};

export const getIMEPayReports = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/reports/imepay/validate', formData);

    return response.data;
  } catch (error) {
    console.error("Error fetching IMEPAY reports:", error);

    const errorMessage = error.response
      ? `Failed to validate report: ${error.response.data.message || error.response.statusText}`
      : 'Network error: Failed to validate report';

    throw new Error(errorMessage);
  }
};