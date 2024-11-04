import { useState } from 'react';

const useBankingForm = () => {
  const [details, setDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
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
      accountName: "",
      accountNumber: "",
      bankName: "",
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

export default useBankingForm;