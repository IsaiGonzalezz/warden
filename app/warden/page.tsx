"use client";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "@/components/Firebase";
import SensorChart from "@/components/SensorChart";

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
    <div className="flex flex-col min-h-screen bg-gray-100">
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
  <h2 className="text-red-500">SIMULACION, NO SE ENCONTRARON DISPOSITIVOS SUSCRITOS</h2>
  <div className="flex flex-col items-center justify-center mb-12">
    <h2 style={{ fontWeight: 'bold', color: 'black' }}>Concentraciones de Gas: metano/natural</h2>
    <div style={{ height: '25px', width: '300px', backgroundColor: '#f3f3f3', borderRadius: '5px', border: '1px solid #d4d4d4', display: 'flex' }}>
      <div style={{ height: '100%', width: '33%', backgroundColor: '#0000FF' }}>0-2.5</div> {/* Azul */}
      <div style={{ height: '100%', width: '33%', backgroundColor: '#00FF00' }}>2.6-5.5</div> {/* Verde */}
      <div style={{ height: '100%', width: '16.5%', backgroundColor: '#FFA500' }}>5.6-6.5</div> {/* Naranja */}
      <div style={{ height: '100%', width: '16.5%', backgroundColor: '#FF0000' }}>6.5-8</div> {/* Rojo */}
    </div>
  </div>
  <SensorChart /> {/* Aquí se añade el componente SensorChart */}
  <br />
  <br />
</main>

      <br />
    </div>
  );
};

export default Warden;
