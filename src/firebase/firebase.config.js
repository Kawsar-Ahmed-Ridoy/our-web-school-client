// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBhtK1Z-72gBqHJ4qWW8-6L85WqLI-DMI",
  authDomain: "our-web-school.firebaseapp.com",
  projectId: "our-web-school",
  storageBucket: "our-web-school.appspot.com",
  messagingSenderId: "962742676992",
  appId: "1:962742676992:web:3cbca1b60268b53d25f2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;