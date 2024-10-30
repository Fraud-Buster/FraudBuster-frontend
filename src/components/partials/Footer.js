import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path based on your project structure
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer className="bg-[#CB122A] max-w-[1216px] w-full pt-5 mx-auto">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start px-5 lg:px-20">
                {/* Logo and Description */}
                <div className="flex flex-col mb-5 lg:mb-0">
                    <img src={logo} alt="Fraud Buster Logo" className="w-auto h-24" />
                    <p className="text-white mt-2 max-w-xs">
                        FraudBuster: Your trusted solution for detecting, reporting, and preventing online scams, ensuring a safer digital world.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-start text-left mb-5 lg:mb-0">
                    <h4 className="text-white font-semibold mb-2">Quick Links</h4>
                    <div className="flex flex-col space-y-2">
                        <a href="#home" className="text-white hover:underline">Home</a>
                        <a href="#about" className="text-white hover:underline">About</a>
                        <a href="#blog" className="text-white hover:underline">Blog</a>
                        <a href="#api" className="text-white hover:underline">API</a>
                        <a href="#contact" className="text-white hover:underline">Contact Us</a>
                    </div>
                </div>

                {/* Contact and Social Links */}
                <div className="flex flex-col items-start text-left">
                    <div className="text-xl text-white font-semibold mb-2">Contact</div>
                    <div className="flex items-start text-white mb-4">
                        <FaEnvelope className="mr-2" /> fraudbuster.xyz@gmail.com
                    </div>
                    <div className="text-white font-semibold mb-2">Follow Us On</div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-white text-2xl" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white text-2xl" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-white text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Subfooter */}
            <div className="bg-[#0A0A0B] text-white text-center py-4 mt-5">
                <p>© 2024 Fraud Buster | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;