import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeContextProvider } from './context/ThemeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
