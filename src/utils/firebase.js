// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-112cd.firebaseapp.com",
  projectId: "blog-112cd",
  storageBucket: "blog-112cd.appspot.com",
  messagingSenderId: "150105130220",
  appId: "1:150105130220:web:1d5506383b5d2cbaa951c9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);