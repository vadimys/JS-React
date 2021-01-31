import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './default/reportWebVitals';
import SimpleComp from "./hw1/SimpleComp";

ReactDOM.render(
  <React.StrictMode>
    <SimpleComp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
