import React, { useState } from "react";
import BankingForm from '../form/BankingForm';
import GetBankingForm from '../form/BankingForm/GetBankingForm';
import EsewaForm from '../form/EsewaForm';
import GetEsewaForm from '../form/EsewaForm/GetEsewaForm';
import KhaltiForm from "../form/KhaltiForm";
import GetKhaltiForm from "../form/KhaltiForm/GetKhaltiForm";
import PhoneNumberForm from "../form/PhoneNumberForm";
import GetPhoneNumberForm from "../form/PhoneNumberForm/GetPhoneNumberForm";
import IMEPayForm from "../form/IMEPayForm"; // Import for IMEPay reporting
import GetIMEPayForm from "../form/IMEPayForm/GetIMEPayForm"; // Import for IMEPay checking

const NepalScamLists = () => {
  const scamTypes = ["Esewa", "Bank", "Khalti", "IMEPay","Phone Number"];
  const [selectedScam, setSelectedScam] = useState("Esewa");
  const [formType, setFormType] = useState("check");

  const handleItemClick = (scamType) => {
    setSelectedScam(scamType);
    setFormType("check"); 
  };

  const toggleFormType = () => {
    setFormType((prevFormType) => (prevFormType === "check" ? "report" : "check"));
  };

  const renderForm = () => {
    if (selectedScam === "Bank") {
      return formType === "report" ? <BankingForm /> : <GetBankingForm />;
    } else if (selectedScam === "Esewa") {
      return formType === "report" ? <EsewaForm /> : <GetEsewaForm />;
    } else if (selectedScam === "Khalti") {
      return formType === "report" ? <KhaltiForm /> : <GetKhaltiForm />;
    } else if (selectedScam === "IMEPay") {
      return formType === "report" ? <IMEPayForm /> : <GetIMEPayForm />;
    } else if (selectedScam === "Phone Number") {
      return formType === "report" ? <PhoneNumberForm /> : <GetPhoneNumberForm />;
    }
    return null;
  };

  return (
    <div className="flex flex-col justify-center align-center">
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
        <div className="flex space-y-4">
          {renderForm()}
        </div>
      </section>
    </div>
  );
};

export default NepalScamLists;