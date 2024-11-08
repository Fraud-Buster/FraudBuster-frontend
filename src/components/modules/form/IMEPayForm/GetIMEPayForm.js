import React, { useState } from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField.js';
import SubmitButton from '../../../partials/form/SubmitButton.js';
import useIMEPayForm from './hooks/useIMEPayForm.js';
import { getIMEPayReports } from './services/IMEPayService.js';

const GetIMEPayForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = useIMEPayForm();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that imepay_number is filled out
    if (!details.imepay_number) {
      setError("IMEPay Number is required.");
      return;
    }

    // Check that IMEPay number is numeric
    if (isNaN(details.imepay_number)) {
      setError("IMEPay Number must be a valid number.");
      return;
    }

    const formData = {
      imepay_number: details.imepay_number,
    };

    setError("");
    setIsLoading(true);

    try {
      const validationResponse = await getIMEPayReports(formData);

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
        <h2 className="text-xl font-semibold mb-4">Check IMEPay Scam</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLoading && <div className="text-blue-500 mb-4">Validating...</div>}

        <form onSubmit={handleSubmit}>
          <InputField
            label="IMEPay Number"
            name="imepay_number"
            value={details.imepay_number}
            onChange={handleChange}
            placeholder="Enter IMEPay number"
          />
          <SubmitButton>Check Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default GetIMEPayForm;