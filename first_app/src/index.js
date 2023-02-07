import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rest from './Restaurant';
// import App from './App';
// import   Hooks12 from './Effect';  
// import AllData from './ALLData';
// import Picture from './Picture';
import reportWebVitals from './reportWebVitals';
import Food from './Food';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rest />
     {/* <App />  */}
     {/* <Food /> */}
     {/* <Picture /> */}
  </React.StrictMode>
);

reportWebVitals();

