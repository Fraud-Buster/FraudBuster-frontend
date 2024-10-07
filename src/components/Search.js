import React from 'react';
import './Search.css'; // Import the CSS file for styles

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Enter the details to check (e.g., eSewa ID, Khalti etc.)"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
