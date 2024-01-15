import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: '9ab239b9-8b2e-41e4-96e1-1cdd23165760',
    authority:
      'https://login.microsoftonline.com/05405dba-373c-4e20-a30e-3e6fcf507cfe',
    redirectUri: 'https://arabicarena.netlify.app',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
