import React from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField.js';
import SubmitButton from '../../../partials/form/SubmitButton.js';
import useKhaltiForm from './hooks/useKhaltiForm.js';
import { submitKhaltiReport } from './services/khaltiService.js';

const KhaltiForm = () => {
  const {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  } = useKhaltiForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      khalti_number: details.khalti_number,
      description: description,
    };

    console.log("Form Data:", formData);

    try {
      await submitKhaltiReport(formData);
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
        <h2 className="text-xl font-semibold mb-4 text-white">Report Khalti Scam</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Khalti Number"
            name="khalti_number"
            value={details.khalti_number}
            onChange={handleChange}
            placeholder="Enter Khalti number"
          />
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Provide a detailed description of the Khalti scam"
          />
          <SubmitButton>Submit Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default KhaltiForm;