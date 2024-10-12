import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Ensure the logo image is in the correct path
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage rounded corners
  const [isRounded, setIsRounded] = useState(true);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      setIsRounded(window.scrollY === 0); // Set rounded based on scroll position
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-[80vw] py-2 px-10 flex justify-between items-center sticky top-0 z-50 mx-auto transition-all duration-300 ${isRounded ? 'rounded-[20px]' : 'rounded-none'}`}>
      {/* Logo with background color */}
      <div className="bg-[#CB122A] rounded-[20px] px-3 py-1">
        <img src={logo} alt="Fraud Buster Logo" className="w-[155px] h-[40px]" />
      </div>

      {/* Navigation Links (transparent) */}
      <div className="flex space-x-5">
        <Link to="/" className="text-gray-400 text-lg font-medium hover:text-white hover:scale-110 transform transition duration-300 ease-out" aria-label="Home">
          Home
        </Link>
        <Link to="/about" className="text-gray-400 text-lg font-medium hover:text-white hover:scale-110 transform transition duration-300 ease-out" aria-label="About">
          About
        </Link>
        <Link to="/blogs" className="text-gray-400 text-lg font-medium hover:text-white hover:scale-110 transform transition duration-300 ease-out" aria-label="Blogs">
          Blogs
        </Link>
        <Link to="/contact" className="text-gray-400 text-lg font-medium hover:text-white hover:scale-110 transform transition duration-300 ease-out" aria-label="Contact">
          Contact
        </Link>
        <Link to="/api" className="text-gray-400 text-lg font-medium hover:text-white hover:scale-110 transform transition duration-300 ease-out" aria-label="API">
          API
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
