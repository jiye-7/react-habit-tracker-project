import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
