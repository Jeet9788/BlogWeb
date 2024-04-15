// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-b7087.firebaseapp.com",
  projectId: "blog-b7087",
  storageBucket: "blog-b7087.appspot.com",
  messagingSenderId: "486655652313",
  appId: "1:486655652313:web:05b5eb7dc97ec0013269c8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);