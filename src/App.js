import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import SRsection from './components/SRsection';
import InsightsSection from './components/InsightsSection'; // Import the Insights Section
import BlogSection from './components/BlogSection'; // Adjust the path if necessary
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Api from './components/Api';


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0A0A0A' }}> {/* Set background color inline */}
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/api' element={<Api />} />
        </Routes>
      <FooterSection />
    </div>
  );
}

export default App;


