import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Ensure the logo image is in the correct path

function Navbar() {
  // State to manage rounded corners
  const [isRounded, setIsRounded] = useState(true);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      if (window.scrollY > 0) {
        setIsRounded(false); // Remove rounded corners
      } else {
        setIsRounded(true); // Add rounded corners
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#CB122A] w-[80vw] py-2 px-10 flex justify-between items-center sticky top-0 z-50 mx-auto transition-all duration-300 ${isRounded ? 'rounded-[20px]' : 'rounded-none'}`}>
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Fraud Buster Logo" className="w-[155px] h-[40px] mt-1" />
      </div>
      
      {/* Navigation Links on the right */}
      <div className="flex space-x-5">
        <a href="/" className="text-white text-lg font-medium hover:text-[#FFD700] transition duration-300">
          Home
        </a>
        <a href="/about" className="text-white text-lg font-medium hover:text-[#FFD700] transition duration-300">
          About
        </a>
        <a href="/blogs" className="text-white text-lg font-medium hover:text-[#FFD700] transition duration-300">
          Blogs
        </a>
        <a href="/contact" className="text-white text-lg font-medium hover:text-[#FFD700] transition duration-300">
          Contact
        </a>
        <a href="/api" className="text-white text-lg font-medium hover:text-[#FFD700] transition duration-300">
          API
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
