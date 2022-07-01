import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import MyProvider from './context/MyProvider';
import './App.css';
import "./components/styles/hourlyTep.css" 
import "./components/styles/currentWeather.css"
import "./components/styles/threeDays.css"
import "./components/styles/bcAnimation.css"

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<MyProvider> <App /></MyProvider>);


