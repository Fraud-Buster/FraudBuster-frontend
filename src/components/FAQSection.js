import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqData = [
    { question: "What is Fraudbuster.xyz?", answer: "Fraudbuster.xyz is a platform dedicated to helping users check and report scams." },
    { question: "How can I report a scam?", answer: "You can report a scam by using the 'Report a Fraud?' button, filling in details about the incident." },
    { question: "How does the search feature work?", answer: "The search feature allows you to check if specific details like e-wallet IDs have been reported as scams." },
    { question: "What regions does Fraudbuster.xyz cover?", answer: "Fraudbuster.xyz covers a wide range of locations, allowing you to tailor your search by city or region." },
    { question: "Can I search for cryptocurrency scams?", answer: "Yes, you can search for scams related to e-wallets, cryptocurrency wallets, and traditional payment methods." },
    { question: "How can I contact customer support?", answer: "You can contact our support team through the 'Contact Us' page on the website." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1 className="faq-heading">Frequently Asked Questions (FAQ)</h1>
      <h3 className="faq-subheading">
        Find answers to common queries about Fraudbuster.xyz and how to make the most of our services.
      </h3>
      
      <div className="faq-content">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <hr className="faq-line" />
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div
              className={`faq-answer-container ${activeIndex === index ? 'expanded' : ''}`}
            >
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
        <hr className="faq-line" />
      </div>
    </div>
  );
};

export default FAQSection;
