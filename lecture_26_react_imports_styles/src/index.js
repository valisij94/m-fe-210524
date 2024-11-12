import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function SimpleParagraph() {

  const currentSeason = 'Autumn';
  return (
    <p>Some text {new Date().toLocaleString()}, now is {currentSeason}</p>
  );
}

function RandomText() {
  const rand = Math.random();
  return (
    <div>
      <p>{rand > 0.5 ? 'Greater' : 'Less'} than 0.5</p>
    </div>
  )
}

root.render(
  <>
    <RandomText />
  </>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
