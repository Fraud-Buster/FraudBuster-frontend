import React from 'react';

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "", // Added to customize input styling
  error = "", // Added for error handling
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block mb-1 text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-[900px] p-2 bg-gray-700 rounded text-white ${className}`} // Fixed width set here
      required
      aria-invalid={error ? "true" : "false"} // For accessibility
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Error message display */}
  </div>
);

export default InputField;