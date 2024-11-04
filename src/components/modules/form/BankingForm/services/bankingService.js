export const submitBankingReport = async (formData) => {
  try {
    const response = await fetch('https://api.example.com/submit-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit report: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting report:", error);
    throw error;
  }
};
