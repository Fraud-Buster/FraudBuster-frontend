// useIMEPayForm.js
import { useState } from 'react';

const useIMEPayForm = () => {
  const [details, setDetails] = useState({
    imepay_number: "", // Updated field name for IMEPay
  });
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const resetForm = () => {
    setDetails({
      imepay_number: "", // Reset field name for IMEPay
    });
    setDescription("");
  };

  return {
    details,
    description,
    handleChange,
    handleDescriptionChange,
    resetForm,
  };
};

export default useIMEPayForm;