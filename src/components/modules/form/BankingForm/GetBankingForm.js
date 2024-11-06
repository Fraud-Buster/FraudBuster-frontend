import React, { useState } from 'react';
import FormContainer from './FormContainer';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import useBankingForm from './hooks/useBankingForm.js';
import { getBankingReports } from './services/bankingService.js'; // Importing the validation function

const GetBankingForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = useBankingForm();

  const [submittedReports, setSubmittedReports] = useState([]);
  const [error, setError] = useState("");  // To display error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation: Check if all fields are filled out
    if (!details.accountName || !details.accountNumber || !details.bankName) {
      setError("All fields must be filled out.");
      return;
    }

    if (isNaN(details.accountNumber)) {
      setError("Account Number must be a valid number.");
      return;
    }

    const formData = {
      account_name: details.accountName,
      account_number: details.accountNumber,
      bank_name: details.bankName,
    };

    setError(""); // Clear any existing error message
    setIsLoading(true); // Set loading state to true before API call

    try {
      // Step 1: Validate the form data before submitting the report
      const validationResponse = await getBankingReports(formData);

      // Check the validation response for report status
      if (validationResponse) {
        if (validationResponse.status === 'valid') {
          // Report is valid
          alert("Report is valid. Proceeding to submit.");

          // Proceed with report submission (You can replace this with an actual submission function)
          setSubmittedReports((prevReports) => [
            ...prevReports,
            formData,
          ]);
          resetForm();
          setIsLoading(false); // Stop loading when the process is complete
          setError("");  // Clear error message on success
        } else if (validationResponse.message === 'Report not found') {
          // Report is not found in the database
          setIsLoading(false); // Stop loading
          setError("Failed to validate report: Report not found.");
        } else {
          // Handle any other invalid responses (e.g., wrong report details)
          setIsLoading(false); // Stop loading
          setError("Report validation failed. Please check the details.");
        }
      } else {
        setIsLoading(false);
        setError("Failed to validate report. No response received.");
      }
    } catch (error) {
      // Handle validation or network errors
      console.error("Error validating the report:", error);
      setIsLoading(false); // Stop loading if there's an error
      setError(error.message || "There was an error validating the report. Please try again.");
    }
  };

  return (
    <FormContainer>
      <section>
        <h2 className="text-xl font-semibold mb-4">Check Banking Scam</h2>
        
        {/* Display error messages */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Display loading spinner when API call is in progress */}
        {isLoading && <div className="text-blue-500 mb-4">Validating...</div>} 

        <form onSubmit={handleSubmit}>
          <InputField
            label="Account Name"
            name="accountName"
            value={details.accountName}
            onChange={handleChange}
            placeholder="Enter account name"
          />
          <InputField
            label="Account Number"
            name="accountNumber"
            value={details.accountNumber}
            onChange={handleChange}
            placeholder="Enter account number"
          />
          <InputField
            label="Bank Name"
            name="bankName"
            value={details.bankName}
            onChange={handleChange}
            placeholder="Enter bank name"
          />
          <SubmitButton>Check Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default GetBankingForm;