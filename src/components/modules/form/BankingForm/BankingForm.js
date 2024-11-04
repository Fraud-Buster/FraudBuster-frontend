import React from 'react';
import FormContainer from './FormContainer';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import useBankingForm from './hooks/useBankingForm.js';
import { submitBankingReport } from './services/bankingService.js';

const BankingForm = () => {
  const {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  } = useBankingForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      account_name: details.accountName,
      account_number: details.accountNumber,
      bank_name: details.bankName,
      description: description,
    };

    try {
      await submitBankingReport(formData);
      alert("Report submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting the report:", error);
      alert("There was an error submitting the report. Please try again.");
    }
  };


  return (
    <FormContainer>
      <section>
        <h2 className="text-xl font-semibold mb-4">Report Banking Scam</h2>
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
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Provide a detailed description of the banking scam"
          />
          <SubmitButton>Submit Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default BankingForm;
