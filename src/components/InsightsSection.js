import React from 'react';
import './InsightsSection.css'; // Import the CSS file for styles
import scamLogo from '../assets/scam-logo.png'; // Ensure the path to the logo is correct

const InsightsSection = () => {
  return (
    <div className="insights-section">
      <div className="insights-text">
        <h2 className="insights-heading">
          Insights into Every <span className="highlight">Scam</span><br />
          Happening Online
        </h2>
        {/* New "How to Search?" Section */}
        <div className="how-to-search">
          <h3>How to Search?</h3>
          <p><strong>Select Your Location:</strong> Simply input your city or region to tailor your search.</p>
          <p><strong>Choose Your Wallet Type:</strong> Effortlessly search for E-wallets, cryptocurrency wallets, or traditional payment methods using our advanced search feature. Our platform organizes wallet details for quick and easy access.</p>
          <p><strong>Get Instant Results:</strong> Discover valuable information about wallets active in your area, including transaction histories, associated scams, and security alerts.</p>
        </div>
      </div>
      <div className="insights-logo">
        <img src={scamLogo} alt="Scam Logo" />
      </div>
    </div>
  );
};

export default InsightsSection;
