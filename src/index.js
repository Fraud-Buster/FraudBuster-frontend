import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this import is correct
import reportWebVitals from './reportWebVitals';
import './index.css'; // Optional: your global styles
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter> {/* Rendering the App component */}
  </React.StrictMode>
);

// Optional: You can include the reportWebVitals function if needed
reportWebVitals();
