import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './assert/boxicons-2.0.7/css/boxicons.min.css'
import './assert/css/grid.css'
import './assert/css/index.css'
import Layout from './components/layout/Layout'


document.title = 'WIKRAMA SUPER'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
