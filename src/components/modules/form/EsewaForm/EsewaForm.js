import React from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField';
import SubmitButton from '../../../partials/form/SubmitButton';
import useEsewaForm from './hooks/useEsewaForm.js';
import { submitEsewaReport } from './services/esewaService.js';

const EsewaForm = () => {
  const {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  } = useEsewaForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      esewa_number: details.esewa_number,
      description: description,
    };
  
    console.log("Form Data:", formData);
  
    try {
      await submitEsewaReport(formData);
      alert("Report submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting the report:", error);
      alert("There was an error submitting the report. Please try again.");
    }
  };

  return (
    <FormContainer>
      <section className="p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Report Esewa Scam</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Esewa Number"
            name="esewa_number"
            value={details.esewa_number}
            onChange={handleChange}
            placeholder="Enter Esewa number"
          />
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Provide a detailed description of the Esewa scam"
          />
          <SubmitButton>Submit Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default EsewaForm;
