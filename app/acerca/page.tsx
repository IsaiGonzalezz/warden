import React from "react";
import Image from "next/image";

const Acerca = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Warden Tech-Secure</div>
        </div>
      </header>

      <div className="m-10 mb-24">
        <section className="mb-4 flex">
          <div className="w-1/2">
            <h2 className="font-bold text-4xl text-blue-700">
              Acerca de nosotros
            </h2>
            <br />
            <br />
            <p className="text-black">
              Somos un grupo dedicado a brindar seguridad a instalaciones tales
              como hogares, oficinas, escuelas, departamentos, etc.
            </p>
            <br />
            <p className="text-black text-justify">
              Ofrecemos soluciones integrales a la medida de cada cliente con un
              precio justo y lo más importante que tengan la certeza de que lo
              que ofrecemos funcionará cada vez que lo requiera.
            </p>
          </div>
          <div className="w-1/2">
            {/* Asegúrate de reemplazar 'ruta/a/tu/imagen.jpg' con la ruta real a tu imagen */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcOpQiPCo4-88qhl0zxBKLxddU7ztjcp5CA&usqp=CAU"
              alt="Imagen descriptiva de la empresa"
              className="w-full h-auto"
            />
          </div>
        </section>
        <br/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-bold text-2xl text-blue-700">Misión</h2>
            <br/>
            <p className='text-black text-justify'>“En Warden, nuestra misión es proporcionar tranquilidad a los hogares a través de soluciones de seguridad innovadoras y confiables. Nos dedicamos a proteger lo que más importa para nuestros clientes, utilizando tecnología de vanguardia en sensores, cámaras y monitores espejo para garantizar la seguridad de sus hogares.”</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-bold text-2xl text-blue-700">Visión</h2>
            <br/>
            <p className='text-black text-justify'> “Nuestra visión en Warden es ser líderes en el mercado de seguridad residencial, reconocidos por nuestra calidad, innovación y compromiso con la seguridad de nuestros clientes. Aspiramos a transformar cada hogar en un espacio seguro, impulsando la evolución de la tecnología de seguridad para anticiparnos a las necesidades de nuestros clientes y superar sus expectativas.”</p>
            
          </div>
          
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      
      <main className="flex-grow"></main>
    </div>
  );
};

export default Acerca;
