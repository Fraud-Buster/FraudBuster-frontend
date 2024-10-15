
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Router here
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

// Optional: Include reportWebVitals if needed
reportWebVitals();