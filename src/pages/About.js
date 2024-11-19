import React from 'react';
import LandingNav from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import About from "../components/modules/about/main.about"; // Capitalize 'About'

export const AboutPage = () => {
  return (
    <main>
      <LandingNav />
      <About /> {/* Use capital 'About' here */}
      <Footer />
    </main>
  );
};

export default AboutPage;


