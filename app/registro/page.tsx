'use client'
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import app from "@/components/Firebase";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert("Se ha enviado un correo electrónico de verificación. Por favor, verifica tu correo electrónico.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 mb-10">
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
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-2/3 bg-blue-500 rounded-tl-2xl rounded-bl-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Encuentra tu Warden</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">¿Ya te registraste?</p>
            <a
              href="./miwarden"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Iniciar sesión
            </a>
          </div>{" "}
          {/* Sign up section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-black">
              <span className="text-blue-500">Warden </span>Tech-Secure
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Crear una cuenta
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-blue-700 bg-gray-100 outline-none text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="text-blue-700 bg-gray-100 outline-none text-sm flex-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Confirmar password"
                    className="text-blue-700 bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  className="text-blue-700 border-2 m-6 border-blue-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-700 hover:text-white"
                >
                  Verificar Correo
                </button>
              </div>
            </div>
          </div>{" "}
          {/* sign in section*/}
        </div>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Registro;
