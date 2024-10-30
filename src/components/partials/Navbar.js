import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Ensure the logo image is in the correct path
import TextAnimation from '../partials/TextAnimation'; // Import the TextAnimation component

const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing hamburger menu

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: <TextAnimation text="Home" />, path: '/' },
    { label: <TextAnimation text="About" />, path: '/about' },
    { label: <TextAnimation text="Blogs" />, path: '/blogs' },
    { label: <TextAnimation text="Contact" />, path: '/contact' },
    { label: <TextAnimation text="API" />, path: '/api' },
  ];

  return (
    <nav className={`max-w-[1216px] w-full py-2 px-4 flex justify-between items-center sticky top-0 z-50 mx-auto transition-all duration-300 ${isScrolled ? 'bg-gray-700 backdrop-blur-md bg-opacity-80' : 'bg-transparent'}`}>
      {/* Logo */}
      <NavLink to='/' className='flex items-center'>
        <img src={logo} alt='Fraud Buster Logo' className='w-[178px] h-[50px]' />
      </NavLink>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close Navigation" : "Open Navigation"}
        >
          {isMenuOpen ? (
            <>
              <span className="block w-8 h-0.5 bg-white transform transition duration-300 rotate-45 translate-y-2" />
              <span className="block w-8 h-0.5 bg-white" />
              <span className="block w-8 h-0.5 bg-white transform transition duration-300 -rotate-45 -translate-y-2" />
            </>
          ) : (
            <>
              <span className="block w-8 h-0.5 bg-white" />
              <span className="block w-8 h-0.5 bg-white mt-1" />
              <span className="block w-8 h-0.5 bg-white mt-1" />
            </>
          )}
        </button>
      </div>

      {/* Navigation Links for larger screens */}
      <div className={`hidden md:flex space-x-5`}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => ` text-gray-400 text-lg font-medium ${isActive ? 'text-white' : 'hover:text-white'} hover:scale-110 transform transition duration-300 ease-out`}
            aria-label={`Navigate to ${item.label.props.text}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 md:hidden transition-all duration-300 ease-in-out">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`block text-gray-400 text-lg font-medium p-4 hover:bg-gray-800 transition duration-300`}
              aria-label={`Navigate to ${item.label.props.text}`}
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default LandingNav;