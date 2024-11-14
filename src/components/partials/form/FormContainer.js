import React from 'react';

const FormContainer = ({ children }) => (
  
    <div className="rounded-lg">
      <div className="flex flex-col justify-center text-white">
        {children}
      </div>
    </div>
);

export default FormContainer;