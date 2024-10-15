import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import ContactPage from '../pages/ContactUs';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<NotFoundPage />} /> {/* Catch-all route */}
    </Routes>
  );
};