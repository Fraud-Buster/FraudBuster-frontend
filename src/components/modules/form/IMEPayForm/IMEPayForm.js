import React from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField.js';
import SubmitButton from '../../../partials/form/SubmitButton.js';
import useIMEPayForm from './hooks/useIMEPayForm.js'; // Updated to IMEPay
import { submitIMEPayReport } from './services/IMEPayService.js'; // Updated to IMEPay service

const IMEPayForm = () => {
  const {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  } = useIMEPayForm(); // Updated to IMEPay

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      imepay_number: details.imepay_number, // Updated field name
      description: description,
    };

    console.log("Form Data:", formData);

    try {
      await submitIMEPayReport(formData); // Updated to IMEPay report submission
      alert("Report submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting the report:", error);
      alert("There was an error submitting the report. Please try again.");
    }
  };

  return (
    <FormContainer>
      <section className="rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Report IMEPay Scam</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="IMEPay Number" // Updated label
            name="imepay_number" // Updated name
            value={details.imepay_number} // Updated field
            onChange={handleChange}
            placeholder="Enter IMEPay number" // Updated placeholder
          />
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Provide a detailed description of the IMEPay scam"
          />
          <SubmitButton>Submit Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default IMEPayForm;