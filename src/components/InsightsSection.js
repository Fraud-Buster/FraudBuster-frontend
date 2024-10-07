import React from 'react';
import scamLogo from '../assets/scam-logo.png'; // Ensure the path to the logo is correct

const InsightsSection = () => {
  return (
    <div className="flex justify-between items-start w-[980px] mx-auto my-10 p-5">
      <div className="text-white font-inter text-lg leading-[1.2] w-[551px] text-left">
        <h2 className="text-4xl font-bold">
          Insights into Every <span className="text-[#CB122A]">Scam</span><br />
          Happening Online
        </h2>
        {/* New "How to Search?" Section */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold mb-2">How to Search?</h3>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Select Your Location:</strong> <br />Simply input your city or region to tailor your search.
          </p>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Choose Your Wallet Type:</strong> <br />Effortlessly search for E-wallets, cryptocurrency wallets, or traditional payment methods using our advanced search feature. Our platform organizes wallet details for quick and easy access.
          </p>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Get Instant Results:</strong> <br />Discover valuable information about wallets active in your area, including transaction histories, associated scams, and security alerts.
          </p>
        </div>
      </div>
      <div>
        <img src={scamLogo} alt="Scam Logo" className="w-[280px] h-[280px]" />
      </div>
    </div>
  );
};

export default InsightsSection;
