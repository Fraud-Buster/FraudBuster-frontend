import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Search from './components/Search';
import ReportButton from './components/ReportButton';
import InsightsSection from './components/InsightsSection'; // Import the new section
import './App.css';
import BlogSection from './components/BlogSection'; // Adjust the path if necessary
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Search />
      <ReportButton />
      <InsightsSection />
      <BlogSection />
      <FAQSection />
       {/* Add the blog section here */}
      {/* Other components go here */}
      <FooterSection />
    </div>
  );
}

export default App;
