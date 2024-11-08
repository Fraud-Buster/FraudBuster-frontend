import React, { useState } from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField';
import SubmitButton from '../../../partials/form/SubmitButton';
import usePhoneNumberForm from './hooks/usePhoneNumberForm.js';
import { getPhoneNumberReports } from './services/phoneNumberService.js';

const GetPhoneNumberForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = usePhoneNumberForm();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that esewa_number is filled out
    if (!details.phone_number) {
      setError("phone Number is required.");
      return;
    }

    // Check that eSewa number is numeric
    if (isNaN(details.phone_number)) {
      setError("Phone Number must be a valid number.");
      return;
    }

    const formData = {
      phone_number: details.phone_number,
    };

    setError("");
    setIsLoading(true);

    try {
      const validationResponse = await getPhoneNumberReports(formData);

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
        <h2 className="text-xl font-semibold mb-4">Check Phone Number Scam</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isLoading && <div className="text-blue-500 mb-4">Validating...</div>}

        <form onSubmit={handleSubmit}>
          <InputField
            label="Phone Number"
            name="phone_number"
            value={details.phone_number}
            onChange={handleChange}
            placeholder="Enter Phone number"
          />
          <SubmitButton>Check Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default GetPhoneNumberForm;