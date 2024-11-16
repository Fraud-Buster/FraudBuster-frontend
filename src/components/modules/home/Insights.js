import React from "react";

// Reusable Arrow Icon
const ArrowIcon = () => (
  <div className="w-8 h-8 lg:w-10 lg:h-10 text-[#CB122A]" role="presentation">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

// StepCard Component with Increased Sizes
const StepCard = ({ title, isLast }) => (
  <div className="flex items-center justify-center space-x-6">
    <div className="bg-transparent border border-[#CB122A] p-6 rounded-lg shadow-lg text-left w-full md:w-[300px] lg:w-[350px] flex-shrink-0">
      <h4 className="text-2xl font-extrabold text-[#CB122A] text-center">{title}</h4>
    </div>
    {!isLast && <ArrowIcon />}  {/* Use ArrowIcon here */}
  </div>
);

// SearchInstructions Component with Increased Width and Text Size
const SearchInstructions = React.forwardRef(({ visibility }, ref) => {
  return (
    <div
      ref={ref}
      className={`text-white font-inter text-xl leading-[1.5] w-full md:w-[1200px] text-center mb-14 ${!visibility ? 'hidden' : ''}`}
      aria-label="How to Search Section"
    >
      <h3 className="text-3xl font-bold mb-6">How to Search?</h3>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <StepCard title="Select Wallet" />
        <StepCard title="Enter the Details" />
        <StepCard title="Hit Check Report" isLast />
      </div>
    </div>
  );
});

// InsightsHeading Component with Larger Font Size
const InsightsHeading = React.forwardRef(({ visibility }, ref) => {
  return (
    <div ref={ref} className={`text-white font-inter text-lg leading-[1.2] w-full md:w-[600px] text-center mb-14 ${!visibility ? 'hidden' : ''}`} aria-label="Insights Heading">
      <h2 className="text-5xl font-extrabold leading-tight">
        Get Insights into <br /> Every <span className="text-[#CB122A]">Scam <br /> happening Online</span>
      </h2>
    </div>
  );
});

// InsightsSection Component
const InsightsSection = () => {
  const isVisible = true; // Directly set visibility to true as there is no toggle anymore.

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[1400px] mx-auto my-12 p-6">
      <InsightsHeading visibility={isVisible} />
      <SearchInstructions visibility={isVisible} />
    </div>
  );
};

export default InsightsSection;