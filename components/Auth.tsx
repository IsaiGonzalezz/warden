import app from './Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(app);

export const sendResetPasswordEmail = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
