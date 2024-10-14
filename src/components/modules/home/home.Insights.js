import React, { useState, useEffect, useRef } from 'react';

// Card Component for Steps with Arrows
const StepCard = ({ title, isLast, isVisible }) => (
  <div className={`flex items-center justify-center space-x-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    {/* Card */}
    <div className="bg-transparent border border-[#CB122A] p-5 rounded-lg shadow-lg text-left w-full md:w-[200px] lg:w-[250px] flex-shrink-0 hover:bg-[#CB122A] hover:bg-opacity-10 transform hover:scale-105 transition-all duration-300">
      <h4 className="text-xl font-extrabold text-[#CB122A] mb-2 text-center">{title}</h4>
    </div>

    {/* Arrow icon if not the last card */}
    {!isLast && (
      <div className="w-6 h-6 lg:w-8 lg:h-8 text-[#CB122A] transform hover:scale-110 transition-all duration-300">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    )}
  </div>
);

// Component for Search Instructions with Sequential Reveal
const SearchInstructions = React.forwardRef((props, ref) => {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);

  useEffect(() => {
    if (props.visibility) {
      // Reveal the steps one by one with a delay
      visibleSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, index * 500); // 500ms delay between each step
      });
    }
  }, [props.visibility]);

  return (
    <div
      ref={ref}
      className={`text-white font-inter text-lg leading-[1.5] w-full md:w-[1000px] text-center transition-transform duration-500 mb-10 ${props.visibility ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      aria-label="How to Search Section"
    >
      <h3 className="text-2xl font-bold mb-5">How to Search?</h3>
      {/* Horizontal Step Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
        <StepCard title="Select Your Wallet" isVisible={visibleSteps[0]} />
        <StepCard title="Enter the Details" isVisible={visibleSteps[1]} />
        <StepCard title="Hit Search" isLast={true} isVisible={visibleSteps[2]} />
      </div>
    </div>
  );
});

// Component for Insights Heading
const InsightsHeading = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={`text-white font-inter text-lg leading-[1.2] w-full md:w-[490px] text-center transition-transform duration-500 mb-12 ${props.visibility ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    aria-label="Insights Heading"
  >
    <h2 className="text-5xl font-extrabold leading-tight">
      Get Insights into Every <span className="text-[#CB122A]">Scam happening Online</span>
    </h2>
  </div>
));

// Main Component
const InsightsSection = () => {
  const [visibility, setVisibility] = useState({
    heading: false,
    paragraphs: false,
  });

  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current) {
            setVisibility((prev) => ({ ...prev, heading: entry.isIntersecting }));
          } else if (entry.target === paragraphsRef.current) {
            setVisibility((prev) => ({ ...prev, paragraphs: entry.isIntersecting }));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe elements
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphsRef.current) observer.observe(paragraphsRef.current);

    // Cleanup observer on unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphsRef.current) observer.unobserve(paragraphsRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[1200px] mx-auto my-10 p-5">
      {/* Right side: Insights Heading */}
      <InsightsHeading ref={headingRef} visibility={visibility.heading} />
      
      {/* Left side: Search Instructions */}
      <SearchInstructions ref={paragraphsRef} visibility={visibility.paragraphs} />
    </div>
  );
};

export default InsightsSection;
