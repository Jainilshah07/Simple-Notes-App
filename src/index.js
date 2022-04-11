import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Note

ReactDOM.render(
  //I can Even Wrap the App from here

  <React.StrictMode>
    <App />
  </React.StrictMode>
  // using Notestate so as to pass the context values anywhere ... any sub child of my app   
  ,
  document.getElementById('root')
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
