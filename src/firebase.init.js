// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZEIbw6hqcA1b_loE2IxPpDpkZxWjU1g",
  authDomain: "genius-car-sarvices.firebaseapp.com",
  projectId: "genius-car-sarvices",
  storageBucket: "genius-car-sarvices.appspot.com",
  messagingSenderId: "117943698793",
  appId: "1:117943698793:web:fd7948bc4aaef5f53169f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;