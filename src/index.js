import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module'; // Import GTM module
import './index.css';

// Initialize Google Tag Manager
TagManager.initialize({ gtmId: 'GTM-P55QRNGX' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


