import { useState } from 'react';

const usePhoneNumberForm = () => {
  const [details, setDetails] = useState({
    phone_number: "",
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
      phone_number: "",
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

export default usePhoneNumberForm;