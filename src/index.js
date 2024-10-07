import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this import is correct
import reportWebVitals from './reportWebVitals';
import './index.css'; // Optional: your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Rendering the App component */}
  </React.StrictMode>
);

// Optional: You can include the reportWebVitals function if needed
reportWebVitals();
