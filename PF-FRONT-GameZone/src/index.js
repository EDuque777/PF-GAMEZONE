import React from 'react';
import axios from "axios";
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://back-gamezone-y96h.onrender.com/"


ReactDOM.render(

<React.StrictMode>
  <PayPalScriptProvider options={{"clientId" : "id del cliente"}}>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </PayPalScriptProvider>
</React.StrictMode>,
  
  document.getElementById('root')
  
);
