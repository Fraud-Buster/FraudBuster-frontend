import React, { useState } from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField';
import SubmitButton from '../../../partials/form/SubmitButton';
import useEsewaForm from './hooks/useEsewaForm.js';
import { getEsewaReports } from './services/esewaService.js';

const GetEsewaForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = useEsewaForm();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that esewa_number is filled out
    if (!details.esewa_number) {
      setError("Esewa Number is required.");
      return;
    }

    // Check that eSewa number is numeric
    if (isNaN(details.esewa_number)) {
      setError("Esewa Number must be a valid number.");
      return;
    }

    const formData = {
      esewa_number: details.esewa_number,
    };

    setError("");
    setIsLoading(true);

    try {
      const validationResponse = await getEsewaReports(formData);

      if (validationResponse?.success) {
        alert("Report found in the database.");
        resetForm();
        setError("");
      } else {
        const errorMsg = validationResponse?.message === 'Report not found'
          ? "Failed to validate report: Report not found."
          : "Report validation failed. Please check the details.";
        setError(errorMsg);
      }
    } catch (error) {
      console.error("Error validating the report:", error);
      setError(error.message || "There was an error validating the report. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <section>
        <h2 className="text-xl font-semibold mb-4">Check eSewa Scam</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLoading && <div className="text-blue-500 mb-4">Validating...</div>}

        <form onSubmit={handleSubmit}>
          <InputField
            label="Esewa Number"
            name="esewa_number"
            value={details.esewa_number}
            onChange={handleChange}
            placeholder="Enter eSewa number"
          />
          <SubmitButton>Check Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default GetEsewaForm;