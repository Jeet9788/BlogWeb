// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-49ee6.firebaseapp.com",
  projectId: "blog-49ee6",
  storageBucket: "blog-49ee6.appspot.com",
  messagingSenderId: "157157993935",
  appId: "1:157157993935:web:1d7e10babb80cb23c3b6ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);