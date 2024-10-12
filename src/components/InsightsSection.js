import React, { useState, useEffect, useRef } from 'react';

const InsightsSection = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [areParagraphsVisible, setAreParagraphsVisible] = useState(false);
  
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility based on intersection
        if (entry.target === headingRef.current) {
          setIsHeadingVisible(entry.isIntersecting);
        } else if (entry.target === paragraphsRef.current) {
          setAreParagraphsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    // Start observing the elements
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphsRef.current) {
      observer.observe(paragraphsRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (paragraphsRef.current) {
        observer.unobserve(paragraphsRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[980px] mx-auto my-10 p-5 mt-40"> {/* Added mt-10 for 40px top margin */}
      {/* Left side: Paragraphs */}
      <div
        ref={paragraphsRef}
        className={`text-white font-inter text-lg leading-[1.5] w-full md:w-[500px] text-left transition-transform duration-500 ${areParagraphsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        {/* "How to Search?" Section */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold mb-2">How to Search?</h3>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Select Your Location:</strong> <br />
            Simply input your city or region to tailor your search.
          </p>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Choose Your Wallet Type:</strong> <br />
            Effortlessly search for E-wallets, cryptocurrency wallets, or traditional payment methods using our advanced search feature. Our platform organizes wallet details for quick and easy access.
          </p>
          <p className="text-base mb-2 leading-6">
            <strong className="text-xl text-[#CB122A]">Get Instant Results:</strong> <br />
            Discover valuable information about wallets active in your area, including transaction histories, associated scams, and security alerts.
          </p>
        </div>
      </div>

      {/* Right side: Heading with animation */}
      <div
        ref={headingRef}
        className={`text-white font-inter text-lg leading-[1.2] w-full md:w-[350px] text-center md:text-right mb-8 md:mb-0 transition-transform duration-500 ${isHeadingVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h2 className="text-4xl font-bold">
          Get Insights into Every <span className="text-[#CB122A]">Scam</span><br />
          Happening Online
        </h2>
      </div>
    </div>
  );
};

export default InsightsSection;
