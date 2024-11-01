// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// import { initializeAppCheck } from 'firebase/app-check';
// import { ReCaptchaV3Provider } from 'firebase/app-check';
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from 'firebase/app-check';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-pg-45e9c.firebaseapp.com",
  projectId: "mern-pg-45e9c",
  storageBucket: "mern-pg-45e9c.appspot.com",
  messagingSenderId: "701362897281",
  appId: "1:701362897281:web:9e5c4f801b7fd5e69c2880"
};
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
// Initialize App Check
const appCheck = initializeAppCheck(app, {
  
  
  provider: new ReCaptchaV3Provider('6LcJyfQpAAAAAFvLWFH090VN7RdC14wZMT1GOgj1'),
  isTokenAutoRefreshEnabled: true,
});

export { app, appCheck ,getToken};
