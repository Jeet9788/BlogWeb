// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-c47aa.firebaseapp.com",
  projectId: "blog-c47aa",
  storageBucket: "blog-c47aa.appspot.com",
  messagingSenderId: "388738956194",
  appId: "1:388738956194:web:d73a5574f0dd5d333cd0fb"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);