import React from 'react';
import './FooterSection.css'; // Make sure to import the CSS file
import logo from '../assets/logo.png'; // Adjust the path based on your project structure
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-info">
                <div className="footer-part footer-logo">
                    {/* Logo and description for the first part of the footer */}
                    <img src={logo} alt="Fraud Buster Logo" className="footer-logo-image" />
                    <p className="footer-description">
                        FraudBuster: Your trusted solution for detecting, reporting, and preventing online scams, ensuring a safer digital world.
                    </p>
                </div>
                <div className="footer-part">
                    {/* Content for the second part of the footer */}
                    <h4>Quick Links</h4>
                    <ul className="quick-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#api">API</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-part">
                    {/* Content for the third part of the footer */}
                    <h4>Contact</h4>
                    <p className="contact-email">
                        <FaEnvelope className="email-icon" /> fraudbuster.xyz@gmail.com
                    </p>
                    <h4>Follow Us On</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-subfooter">
                <p>© 2024 Fraud Buster | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
