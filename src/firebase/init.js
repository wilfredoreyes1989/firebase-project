// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF88aMi8pkkBOxdc5ORIW6BJrxwV6Y-T0",
  authDomain: "fir-72c5a.firebaseapp.com",
  projectId: "fir-72c5a",
  storageBucket: "fir-72c5a.appspot.com",
  messagingSenderId: "90169321334",
  appId: "1:90169321334:web:39dd6d76950b95a090fc57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();