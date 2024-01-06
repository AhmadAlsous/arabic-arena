import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './config/authConfig.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './features/UserContext.jsx';

const msalInstance = new PublicClientApplication(msalConfig);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MsalProvider instance={msalInstance}>
        <UserProvider>
          <App />
        </UserProvider>
        <Toaster
          containerStyle={{
            top: 85,
          }}
        />
      </MsalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
