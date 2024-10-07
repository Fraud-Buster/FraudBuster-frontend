import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Search from './components/Search';
import ReportButton from './components/ReportButton';
import InsightsSection from './components/InsightsSection'; // Import the new section
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Search />
      <ReportButton />
      <InsightsSection />  {/* Add the Insights section below the button */}
    </div>
  );
}

export default App;
