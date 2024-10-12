import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNav from "../components/partials/Navbar"
import Footer from "../components/partials/Footer"
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (<>
    <LandingNav/>
    <div className="flex flex-col justify-center items-center h-screen bg-[#0A0A0A] text-white text-center">
      <h1 className="text-6xl mb-4 text-[#CB122A]">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 text-[#CB122A] underline cursor-pointer hover:text-gray-300 transition duration-300"
      >
        Go back to Home
      </button>
    </div>
    <Footer/></>
  );
};


