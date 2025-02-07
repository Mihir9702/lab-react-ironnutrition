import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './style-guide/App.example';
import 'antd/dist/antd.css';
import foodsJSON from './foods.json';

ReactDOM.render(
  <React.StrictMode>
    <App foodsJSON={foodsJSON} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
