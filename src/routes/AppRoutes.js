import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './LandingPage'; // Adjust the import path as needed
// import About from './About'; // Adjust the import path as needed
// import Blogs from './Blogs'; // Adjust the import path as needed
// import Contact from './Contact'; // Adjust the import path as needed
// import API from './API'; // Adjust the import path as needed
import { Home } from '../pages/Home';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import ContactPage from '../pages/ContactUs';
import { NotFoundPage } from '../pages/NotFoundPage';
export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/api" element={<NotFoundPage/>} />
      </Routes>
  );
};


