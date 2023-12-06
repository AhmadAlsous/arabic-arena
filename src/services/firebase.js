// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { OAuthProvider } from 'firebase/auth';
import { generateCodeVerifier } from '../utility/codeChallenge';
import { generateCodeChallenge } from '../utility/codeChallenge';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyA3_b3fTpNod1-7MnPrgTF-rV6EoXrEWME',
  authDomain: 'arabic-arena.firebaseapp.com',
  projectId: 'arabic-arena',
  storageBucket: 'arabic-arena.appspot.com',
  messagingSenderId: '324319582033',
  appId: '1:324319582033:web:6d18434092bcb2cc33a570',
  measurementId: 'G-SESV05FPBW',
};

const app = initializeApp(firebaseConfig);
export const provider = new OAuthProvider('microsoft.com');

export async function configureProvider() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  provider.setCustomParameters({
    tenant: 'common',
    client_id: '9ab239b9-8b2e-41e4-96e1-1cdd23165760',
    response_type: 'id_token',
    scope: 'openid email profile',
    response_mode: 'fragment',
    prompt: 'none',
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  });
}
