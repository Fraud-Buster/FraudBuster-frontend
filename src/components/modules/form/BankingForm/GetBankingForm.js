import React, { useState } from 'react';
import FormContainer from './FormContainer';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import useBankingForm from './hooks/useBankingForm.js';
import { getBankingReports } from './services/bankingService.js';

const GetBankingForm = () => {
  const {
    details,
    handleChange,
    resetForm,
  } = useBankingForm();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
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
  
    setError("");
    setIsLoading(true);
  
    try {
      const validationResponse = await getBankingReports(formData);
  
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
        <h2 className="text-xl font-semibold mb-4">Check Banking Scam</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
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