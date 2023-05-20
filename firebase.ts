// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJjaAZPecrmzVQv5WFINv3C_BL5yPS17M",
  authDomain: "kasio-640c5.firebaseapp.com",
  projectId: "kasio-640c5",
  storageBucket: "kasio-640c5.appspot.com",
  messagingSenderId: "984139250920",
  appId: "1:984139250920:web:a97bf972bb073e740c1d5d",
  measurementId: "G-PVWK1CEYJN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
