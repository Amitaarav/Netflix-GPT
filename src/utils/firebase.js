// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQqkOBNQ7EELy1rgObnRXVPQxvL6FlfAg",
  authDomain: "netflixai-lksaarav.firebaseapp.com",
  projectId: "netflixai-lksaarav",
  storageBucket: "netflixai-lksaarav.firebasestorage.app",
  messagingSenderId: "104293321929",
  appId: "1:104293321929:web:5585b386bea13c0b5b1118",
  measurementId: "G-K2H5Q9QM8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();