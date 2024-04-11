'use client'
import React, { useState, useEffect } from "react";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { signInWithEmail, signInWithGoogle,  sendResetPasswordEmail} from '@/components/Auth';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const MiWarden = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        window.location.href = "/warden";
      }
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        window.location.href = "/warden";
      })
      .catch((error) => {
        // Error en el inicio de sesión
        setErrorMessage(error.message); 
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        // Inicio de sesión exitoso
        window.location.href = "/warden";
      })
      .catch((error) => {
        // Error en el inicio de sesión
        setErrorMessage(error.message); 
      });
  };

  const handlePasswordReset = () => {
    sendResetPasswordEmail(email)
      .then(() => {
        // Correo electrónico de restablecimiento de contraseña enviado
        alert("Se ha enviado un correo electrónico de restablecimiento de contraseña. Por favor, revisa tu correo electrónico.");
      })
      .catch((error) => {
        // Error al enviar el correo electrónico de restablecimiento de contraseña
        setErrorMessage(error.message);
      });
  };

  

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <title>Mi Warden</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <br/>
      {errorMessage && <p>{errorMessage}</p>}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-black">
              <span className="text-green-500">Warden </span>Tech-Secure
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  onClick={handleSignInWithGoogle}
                >
                  <FaGoogle color="green" className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">O usa tu cuenta de email</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-green-700 bg-gray-100 outline-none text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="text-green-700 bg-gray-100 outline-none text-sm flex-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <a
                  href="#"
                  className="text-green-400 underline text-sm mb-3"
                  onClick={handlePasswordReset}
                >
                  Forgot Password?
                </a>
                <a
                  href="#"
                  className="text-green-400 border-2 border-green-400 rounded-full m-4 mb-0 px-12 py-2 inline-block font-semibold hover:bg-green-400 hover:text-white"
                  onClick={handleSignIn}
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>{" "}
          {/* sign in section*/}
          <div className="w-2/3 bg-green-500 rounded-tr-2xl rounded-br-2l py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">¡Hola!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Find all about your personal Warden</p>
            <p className="mb-5">Don´t have an account?</p>
            <a
              href="./registro"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>{" "}
          {/* Sign up section */}
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MiWarden;
