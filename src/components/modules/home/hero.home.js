import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BankingForm from '../form/BankingForm';
const HeroHome = () => {
  return (
    <section id="Home-Hero" className="min-h-[100vh] w-full">
      <div className="flex flex-col justify-center w-full max-w-3xl mx-auto mt-20 mb-0 p-4">
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold leading-normal">
          Check and Report <span className="text-[#CB122A]">Frauds</span> to keep the Community Safe
        </h1>
      </div>
      <BankingForm />
    </section>
  );
};

export default HeroHome;