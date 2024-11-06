import React from 'react';

const FormContainer = ({ children }) => (
  <div className="flex justify-center w-[900px]">
    <div className="w-11/12 max-w-5xl rounded-lg overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 mr-5 text-white">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default FormContainer;