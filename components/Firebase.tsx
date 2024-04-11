import { initializeApp } from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC57jTQgZ_2smqcTPwgRRA5E66cbu5uEag",
  authDomain: "warden-7a639.firebaseapp.com",
  projectId: "warden-7a639",
  storageBucket: "warden-7a639.appspot.com",
  messagingSenderId: "325179964642",
  appId: "1:325179964642:web:67c6d0c3e08206f7b3f2bb"
};

const app = initializeApp(firebaseConfig);

export default app;

