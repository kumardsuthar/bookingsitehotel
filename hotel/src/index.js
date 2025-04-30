import React from 'react';
import ReactDOM from "react-dom/client"; // Correct import for React 18+


import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Auth0Provider   domain="dev-sbtq0myfneqr1tmq.us.auth0.com"
    clientId="5O5tpqY7KbgECsAw5MXSbrdfKPKC07qd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <App />
</Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

