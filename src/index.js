import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("ReactDOM.render() about to be called")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("ReactDOM.render() was called")
