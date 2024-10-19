import React from 'react';
import HomeForm from '../home/HeroSection/home.form';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroHome = () => {
  return (
    <section id="Home-Hero" className="h-[80vh] w-full">
      <div className="flex flex-col justify-center w-full max-w-3xl mx-auto mt-20 mb-0 p-4">
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold leading-normal">
          Check and Report <span className="text-[#CB122A]">Frauds</span> to keep the Community Safe
        </h1>
      </div>
      <HomeForm />
    </section>
  );
};

export default HeroHome;