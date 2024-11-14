import React, { useState } from 'react';
import useScrollScale from '../../../partials/useScrollScale';  

const faqData = [
  { question: "What is Fraudbuster.xyz?", answer: "Fraudbuster.xyz is a platform dedicated to helping users check and report scams." },
  { question: "How can I report a scam?", answer: "You can report a scam by using the 'Report a Fraud?' button, filling in details about the incident." },
  { question: "How does the search feature work?", answer: "The search feature allows you to check if specific details like e-wallet IDs have been reported as scams." },
  { question: "What regions does Fraudbuster.xyz cover?", answer: "Fraudbuster.xyz covers a wide range of locations, allowing you to tailor your search by city or region." },
  { question: "Can I search for cryptocurrency scams?", answer: "Yes, you can search for scams related to e-wallets, cryptocurrency wallets, and traditional payment methods." },
  { question: "How can I contact customer support?", answer: "You can contact our support team through the 'Contact Us' page on the website." }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Use the custom hook to get the scaling value
  const scale = useScrollScale(0.5, 1, 2100); // You can adjust minScale, maxScale, and scrollThreshold as needed

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const DashedLine = () => (
    <div style={{ borderTop: '1.5px dashed #CB122A', width: '100%' }}></div>
  );

  const FAQItem = ({ faq, index }) => (
    <div key={index} className="faq-item">
      <DashedLine />
      <div
        className={`font-inter font-semibold text-2xl text-white cursor-pointer py-2 transition-colors duration-300 hover:text-[#CB122A] ${
          activeIndex === index ? 'text-[#CB122A]' : 'text-white'
        }`}
        onClick={() => toggleFAQ(index)}
        aria-expanded={activeIndex === index}
        aria-controls={`faq-answer-${index}`}
        role="button"
      >
        {faq.question}
      </div>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          activeIndex === index ? 'h-auto translate-y-0 opacity-100' : 'h-0 translate-y-[-20px] opacity-0'
        }`}
      >
        <div className="font-inter text-xl font-normal text-white py-2 mb-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-center justify-center mb-8 my-12 text-white text-left p-6"
      style={{
        height: '100vh',  // Full height of the viewport for centering
        width: '100vw'    // Full width of the viewport for centering
      }}
    >
      <h1 className="font-inter font-bold text-xl md:text-3xl text-white text-center">
  Frequently Asked Questions
  <span className="inline-block"> (FAQ)</span>
</h1>
<h3 className="font-inter font-normal text-lg md:text-2xl my-2 mb-8 text-center text-white">
  Find answers to common queries about <span className="text-[#CB122A]">Fraudbuster.xyz</span> and how to make the most of our services.
</h3>

      <div
        className="w-full max-w-screen-md mx-auto"
        style={{
          transform: `scale(${scale})`, // Apply the scaling effect on scroll
        }}
      >
        {faqData.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
        <DashedLine />
      </div>
    </div>
  );
};

export default FAQSection;