import React from 'react';
import { useState } from "react";
import HomeForm from './home.form';
const HeroHome = () => {
    
  return (
    <section id="Home-Hero" class="h-[80vh] w-[100vw]">
        <div className="flex flex-col justify-center w-[1029px] h-[185px] mx-auto mt-[75px] mb-[0px]">
      <h1 className="text-white text-center text-5xl font-bold leading-normal">
        Check and Report <span className="text-[#CB122A]">Frauds</span> to keep the Community Safe
      </h1>
    </div>
    <HomeForm/>
    </section>
  );
};

export default HeroHome;
