import React from "react";

const Contacto = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <title>Contactanos</title>
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mb-4">
            <h3 className="font-bold text-xl text-black">Teléfono</h3>
            <p className="text-black">+1 (555) 123-4567</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl text-black">Redes Sociales</h3>
            <p className="text-black">@Wardencito</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-black">Ubicación</h3>
            <p className="text-black">Ciudad, San Juan del Río</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
