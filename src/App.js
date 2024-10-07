import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
<<<<<<< Updated upstream
import InsightsSection from './components/InsightsSection'; // Import the new section
import './App.css';
=======
import InsightsSection from './components/InsightsSection'; // Import the Insights Section
>>>>>>> Stashed changes
import BlogSection from './components/BlogSection'; // Adjust the path if necessary
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import SRsection from './components/SRsection';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#181818' }}> {/* Set background color inline */}
      <Navbar />
      <Heading />
<<<<<<< Updated upstream
=======
      <SRsection />
>>>>>>> Stashed changes
      <InsightsSection />
      <BlogSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}

export default App;
