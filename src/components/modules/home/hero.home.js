import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NepalScamLists from '../countryWiseLists/nepal.scamlist';

// HeroTitle Component
const HeroTitle = () => (
  <div className="flex flex-col justify-center w-full p-4">
    <h1
      className="text-white text-5xl font-extrabold leading-tight text-center"
      aria-label="Fraud detection and reporting"
    >
      Check and Report <br /> <span className="text-[#CB122A]">Frauds</span> to Keep the Community Safe
    </h1>
  </div>
);

// HeroContent Component
const HeroContent = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
    <NepalScamLists />
  </div>
);

const HeroHome = () => (
  <header id="Home-Hero" className="w-full py-4 mt-2">
    <HeroTitle />
    <HeroContent />
  </header>
);

export default HeroHome;