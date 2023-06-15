import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';

const businesses: string[] = import.meta.env.VITE_BUSINESSES.split(',').map((s: string) => s.trim());
const languages: string[] = import.meta.env.VITE_LANGUAGES.split(',').map((s: string) => s.trim());
const callbackPath: string | undefined = import.meta.env.VITE_ESI_CALLBACK_PATH;
const redirectUri: string = import.meta.env.VITE_ESI_REDIRECT_URI;
const clientId: string = import.meta.env.VITE_ESI_CLIENT_ID;
const grpcUrl: string = import.meta.env.VITE_SERVICE_URL;
const authUrl: string = import.meta.env.VITE_AUTH_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ height: '100vh' }}>
      <App
        grpcUrl={grpcUrl}
        businesses={businesses}
        languages={languages}
        loginProps={{ redirectUri, clientId, authUrl, callbackPath }}
      />
    </div>
  </React.StrictMode>,
);
