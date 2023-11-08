import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="fundit.eu.auth0.com" // String literals need to be in quotes
      clientId="ne8NdU01G2ewPJQnAPECIszMUk9e7mlJ" // String literals need to be in quotes
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
