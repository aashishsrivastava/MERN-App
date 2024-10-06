// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5u76pFQlsuRcwrbXTcezzEpbmoPi6iSc",
  authDomain: "mern-book-inventory-alex.firebaseapp.com",
  projectId: "mern-book-inventory-alex",
  storageBucket: "mern-book-inventory-alex.appspot.com",
  messagingSenderId: "1065709453102",
  appId: "1:1065709453102:web:10f0f9f13c811bbc2f84bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;