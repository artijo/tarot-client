import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArsr7Lf8x1FM6Pno__dPG_eu3GWPt3lpA",
  authDomain: "fir-auth-554f0.firebaseapp.com",
  projectId: "fir-auth-554f0",
  storageBucket: "fir-auth-554f0.appspot.com",
  messagingSenderId: "115232305682",
  appId: "1:115232305682:web:b5a05c84ca2e2b16cc1ecb",
  measurementId: "G-DF3V5JLML5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};