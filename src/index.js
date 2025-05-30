import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

//reportWebVitals();
//для измерения и отправки метрик Web Vitals в аналитическую системуМы будем использовать сервер 