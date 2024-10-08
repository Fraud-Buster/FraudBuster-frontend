import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import SRsection from './components/SRsection';
import InsightsSection from './components/InsightsSection'; // Import the Insights Section
import BlogSection from './components/BlogSection'; // Adjust the path if necessary
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#181818' }}> {/* Set background color inline */}
      <Navbar />
      <Heading />
      <SRsection />
      <InsightsSection />
      <BlogSection />
      <FAQSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}

export default App;
