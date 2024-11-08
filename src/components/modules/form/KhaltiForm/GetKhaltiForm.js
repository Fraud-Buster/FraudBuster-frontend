import React, { useState } from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField.js';
import SubmitButton from '../../../partials/form/SubmitButton.js';
import useKhaltiForm from './hooks/useKhaltiForm.js';
import { getKhaltiReports } from './services/khaltiService.js';

const GetKhaltiForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = useKhaltiForm();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that khalti_number is filled out
    if (!details.khalti_number) {
      setError("Khalti Number is required.");
      return;
    }

    // Check that Khalti number is numeric
    if (isNaN(details.khalti_number)) {
      setError("Khalti Number must be a valid number.");
      return;
    }

    const formData = {
      khalti_number: details.khalti_number,
    };

    setError("");
    setIsLoading(true);

    try {
      const validationResponse = await getKhaltiReports(formData);

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
        <h2 className="text-xl font-semibold mb-4">Check Khalti Scam</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLoading && <div className="text-blue-500 mb-4">Validating...</div>}

        <form onSubmit={handleSubmit}>
          <InputField
            label="Khalti Number"
            name="khalti_number"
            value={details.khalti_number}
            onChange={handleChange}
            placeholder="Enter Khalti number"
          />
          <SubmitButton>Check Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default GetKhaltiForm;