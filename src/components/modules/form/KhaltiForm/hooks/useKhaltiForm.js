// useKhaltiForm.js
import { useState } from 'react';

const useKhaltiForm = () => {
  const [details, setDetails] = useState({
    khalti_number: "",
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
      khalti_number: "",
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

export default useKhaltiForm;