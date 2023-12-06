import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

function LoginPage() {
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
  const auth = getAuth(app);
  const provider = new OAuthProvider('microsoft.com');

  provider.setCustomParameters({
    tenant: 'common',
    client_id: '9ab239b9-8b2e-41e4-96e1-1cdd23165760',
    response_type: 'id_token',
    scope: 'openid email profile',
    response_mode: 'fragment',
    prompt: 'none',
  });

  async function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log(accessToken);
        console.log(idToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <button onClick={login}>Login</button>;
}

export default LoginPage;
