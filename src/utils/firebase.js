// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZIWTPepC-r9cW1BXAnFGWE5QOz_e0Cfo",
  authDomain: "netflixgptnew-52b9c.firebaseapp.com",
  projectId: "netflixgptnew-52b9c",
  storageBucket: "netflixgptnew-52b9c.firebasestorage.app",
  messagingSenderId: "869341445944",
  appId: "1:869341445944:web:d098147a415140ea480bcd",
  measurementId: "G-64BD0SSFJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);