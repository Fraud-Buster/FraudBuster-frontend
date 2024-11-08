import React from 'react';
import FormContainer from '../../../partials/form/FormContainer.js';
import InputField from '../../../partials/form/InputField';
import SubmitButton from '../../../partials/form/SubmitButton';
import usePhoneNumberForm from './hooks/usePhoneNumberForm.js';
import { submitPhoneNumberReport } from './services/phoneNumberService.js';

const PhoneNumberForm = () => {
  const {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  } = usePhoneNumberForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      phone_number: details.phone_number,
      description: description,
    };
  
    console.log("Form Data:", formData);
  
    try {
      await submitPhoneNumberReport(formData);
      alert("Report submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting the report:", error);
      alert("There was an error submitting the report. Please try again.");
    }
  };

  return (
    <FormContainer>
      <section className=" rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Report Phone Number Scam</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Phone Number"
            name="phone_number"
            value={details.phone_number}
            onChange={handleChange}
            placeholder="Enter Phone number"
          />
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Provide a detailed description of the PHONE scam"
          />
          <SubmitButton>Submit Report</SubmitButton>
        </form>
      </section>
    </FormContainer>
  );
};

export default PhoneNumberForm;
