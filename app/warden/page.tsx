"use client";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "@/components/Firebase";

const Warden = () => {
  const handleSignOut = (event: React.MouseEvent) => {
    event.preventDefault();
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Cierre de sesión exitoso
        window.location.href = "/miwarden"; // Redirige al usuario a la página de inicio después del cierre de sesión
      })
      .catch((error) => {
        // Ocurrió un error
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <title>Warden</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <main className="w-full flex-1 px-20 text-center">
        <div className="w-full text-right p-4 ml-20">
          <a
            href="#"
            className="text-white border-2 border-green-400 bg-green-400 rounded-full m-0 mb-10 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-400"
            onClick={handleSignOut}
          >
            Cerrar sesión
          </a>
        </div>
      </main>
    </div>
  );
};

export default Warden;
