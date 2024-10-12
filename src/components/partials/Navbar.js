import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Ensure the logo image is in the correct path

const LandingNav = function () {
  // State to manage background color and blur effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(function () {
    const handleScroll = function () {
      // Check if the scroll position is greater than the viewport height
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", path: '/' },
    { label: "About", path: '/about' },
    { label: "Blogs", path: '/blogs' },
    { label: "Contact", path: '/contact' },
    { label: "API", path: '/api' },
  ];

  return React.createElement('nav', {
    className: `w-[80vw] py-2 px-10 flex justify-between items-center sticky top-0 z-50 mx-auto transition-all duration-300 ${isScrolled ? 'bg-gray-700 backdrop-blur-md bg-opacity-80' : 'bg-transparent'}`
  },
    // Logo with background color
    React.createElement(NavLink, { 
      to: '/', // Path to home
      className: 'bg-[#CB122A] px-3 py-1 flex items-center' // Added flex for alignment
    },
    React.createElement('img', { 
      src: logo, 
      alt: 'Fraud Buster Logo', 
      className: 'w-[155px] h-[40px]' 
    })
  ),

    // Navigation Links
    React.createElement('div', { className: 'flex space-x-5' },
      navItems.map(function (item, index) {
        return React.createElement(NavLink, {
          key: index,
          to: item.path,
          className: function ({ isActive }) {
            return `text-gray-400 text-lg font-medium ${isActive ? 'text-white' : 'hover:text-white'} hover:scale-110 transform transition duration-300 ease-out`;
          },
          'aria-label': item.label,
        }, item.label);
      })
    )
  );
};

export default LandingNav;