import React from 'react';
import LandingNav from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Contact from '../components/modules/contactus/main.contactus';

export const ContactPage = () => {
  return (
    <main>
      <LandingNav />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
