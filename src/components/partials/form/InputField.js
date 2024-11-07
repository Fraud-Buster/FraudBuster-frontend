import React from 'react';

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 rounded text-white"
      required
    />
  </div>
);
export default InputField;