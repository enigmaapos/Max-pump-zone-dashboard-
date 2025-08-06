import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css'; // Assuming you might have a global CSS file, if not, you can remove this line
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional, for performance metrics, if not needed, remove this line and its call below

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
