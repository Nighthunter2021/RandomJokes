import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/>);

// root.render(
// // <div class="container"> 
//   <h1 style={{ color: 'white' }}> {showTime} </h1> 
// // </div>
// );


// const date = new Date();
// const showTime = date.getHours()+ ':' + date.getMinutes()+ ":" + date.getSeconds();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();