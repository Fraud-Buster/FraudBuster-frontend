import React, { useState } from "react";
import BankingForm from '../form/BankingForm';
import GetBankingForm from '../form/BankingForm/GetBankingForm';
import EsewaForm from '../form/EsewaForm';
import GetEsewaForm from '../form/EsewaForm/GetEsewaForm';

const NepalScamLists = () => {
  const scamTypes = ["Esewa", "Bank"];
  const [selectedScam, setSelectedScam] = useState("Esewa");
  const [formType, setFormType] = useState("check"); // Initial form type is "check"

  const handleItemClick = (scamType) => {
    setSelectedScam(scamType);
    setFormType("check"); // Reset to "check" on new selection
  };

  const toggleFormType = () => {
    setFormType((prevFormType) => (prevFormType === "check" ? "report" : "check"));
  };

  const renderForm = () => {
    if (selectedScam === "Bank") {
      return formType === "report" ? <BankingForm /> : <GetBankingForm />;
    } else if (selectedScam === "Esewa") {
      return formType === "report" ? <EsewaForm /> : <GetEsewaForm />;
    }
    return null;
  };

  return (
    < div className = "flex flex-col justify-center align-center">
      <div className="flex justify-center items-center mb-6">
  <button
    onClick={toggleFormType}
    className={`px-4 py-2 rounded-md transition-colors duration-300 ${
      formType === "check" ? "text-white bg-[#cb122a] hover:bg-red-700" : "bg-red-500 hover:bg-red-700"
    }`}
  >
    {formType === "check" ? "Report Scam" : "Check Scam"}
  </button>
</div>
      <section className="flex h-screen">
        {/* Navigation bar */}
        <div className="text-white p-6 flex flex-col gap-4 w-64 h-[50vh] rounded-md">
          {scamTypes.map((scam, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(scam)}
              className={`text-lg cursor-pointer hover:bg-[#a30f21] px-4 py-2 rounded-md ${
                selectedScam === scam ? "bg-[#cb122a] hover:bg-red-700" : ""
              }`}
            >
              {scam}
            </div>
          ))}
        </div>
        {/* Main content area */}
        <div className="flex p-6 space-y-4">
          {renderForm()}
        </div>
      </section>
    </div>
  );
};

export default NepalScamLists;