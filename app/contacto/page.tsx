import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
const Contacto = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <title>Contactanos</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <main>
        <div
          className="bg-cover bg-center min-h-screen relative mb-16"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1405489463/es/foto/vista-de-tres-cuartos-de-la-c%C3%A1mara-de-vigilancia-varifocal-con-una-casa-al-fondo.jpg?s=612x612&w=0&k=20&c=fip-9VY96pAuT1KxzsmKtOZ1-WaKhbOpzz_7YlFmbJI=')",
          }}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl text-white font-bold">CONTACTO</h2>
          </div>
        </div>
        <div className="flex justify-center items-center h-100">
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-3/4">
            <h3 className="font-bold text-xl text-black mb-2">
              ¿Primer Contacto?
            </h3>
            <p className="text-black mb-4">
              Nuestro objetivo es encontrar la configuración de seguridad que se
              adapte perfectamente a tu propiedad. No dudes en preguntarnos
              cualquier detalle o inquietud que tengas.
            </p>
            <div className="border-2 w-10 border-green-500 inline-block mb-4"></div>
            <div className="mb-4 flex items-start">
              <MdPhone className="m-2 text-green-500" size={24} />
              <div>
                <h4 className="font-bold text-xl text-black">Teléfono</h4>
                <p className="text-black">+52 427-104-0535</p>
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <MdEmail className="mr-2 text-green-500" size={24} />
              <div>
                <h4 className="font-bold text-xl text-black">Correo</h4>
                <p className="text-black">wardents@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdLocationOn className="mr-2 text-green-500" size={24} />
              <div>
                <h4 className="font-bold text-xl text-black">Ubicación</h4>
                <p className="text-black">
                  Av. La Palma, Vista Hermosa, San Juan del Río
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start ml-48 mt-5">
          <div>
            <h4 className="font-bold text-xl text-black">Encuentranos</h4>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen mt-16 mb-36">
          <div className="bg-white shadow-lg rounded-lg p-6 text-left w-3/4">
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.3537842853932!2d-100.01056976673154!3d20.367686513522973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d30c6707079ad9%3A0x16daa5dc56c8c592!2sUniversidad%20Tecnol%C3%B3gica%20de%20San%20Juan%20del%20R%C3%ADo!5e0!3m2!1ses-419!2smx!4v1712550386665!5m2!1ses-419!2smx"
                style={{ width: "100%", height: "100vh", border: "none" }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Contacto;
