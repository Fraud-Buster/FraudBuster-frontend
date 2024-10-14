import React from 'react';
import LandingNav from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Blog from '../components/modules/blogs/main.blog';

export const BlogPage = () => {
  return (
    <main>
      <LandingNav />
      <Blog /> {/* Use capital 'About' here */}
      <Footer />
    </main>
  );
};

export default BlogPage;
