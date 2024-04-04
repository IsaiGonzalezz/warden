// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC57jTQgZ_2smqcTPwgRRA5E66cbu5uEag",
  authDomain: "warden-7a639.firebaseapp.com",
  projectId: "warden-7a639",
  storageBucket: "warden-7a639.appspot.com",
  messagingSenderId: "325179964642",
  appId: "1:325179964642:web:67c6d0c3e08206f7b3f2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
