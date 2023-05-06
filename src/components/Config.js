import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAwl8nY2bsmKhH8EsDdYPsm9f8GCk4188o",
  authDomain: "dev-auth-5d66d.firebaseapp.com",
  projectId: "dev-auth-5d66d",
  storageBucket: "dev-auth-5d66d.appspot.com",
  messagingSenderId: "318763789319",
  appId: "1:318763789319:web:e391b0b1fcff58f1ca4ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}