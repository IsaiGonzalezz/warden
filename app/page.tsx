import React from "react";
import Image from "next/image";
import Link from "next/link";

const bannerItem = {
  title: "Warden Tech-Secure",
  subtitle: "Protección las 24 horas",
  image:
    "https://cdn.pixabay.com/photo/2017/05/24/06/04/abstract-2339604_960_720.jpg",
};

const cardItems = [
  {
    id: 1,
    title: "Seguridad residencial",
    subtitle: "Protección a tu familia y patrimonio",
    image:
      "https://cdn.pixabay.com/photo/2017/01/18/23/59/insurance-1991226_640.jpg",
  },
  {
    id: 2,
    title: "Empresas y espacios coorporativos",
    subtitle:
      "Solución profesional para integrar sistemas de alarma, videovigilancia y control de accesos.",
    image:
      "https://media.istockphoto.com/id/670723856/es/foto/c%C3%A1mara-de-seguridad-en-la-corporaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=k8N07rmvppOMJ8c43h7tju6v41z86ZqoSl81i9Q2F8Q=",
  },
  {
    id: 3,
    title: "Espacios educativos",
    subtitle: "Garantiza la seguridad de un colegio y a sus alumnos",
    image:
      "https://media.istockphoto.com/id/1422516934/es/foto/vista-trasera-de-los-estudiantes-de-secundaria-que-estudian-en-el-aula.jpg?s=612x612&w=0&k=20&c=DdJpqkwd3dXFuMNu-vlesb9ig1My3xR3eyLIZdv-hkY=",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <title>Inicio</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <main className="flex-grow">
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerItem.image})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-black">
              {bannerItem.title}
            </h2>
            <p className="text-2xl text-black">{bannerItem.subtitle}</p>
          </div>
        </div>
        <br />
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-black">
            Elige la mejor opcion para ti
          </h2>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardItems.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-black">
                    {card.title}
                  </h3>
                  <p className="text-black">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 flex flex-col md:flex-row">
          <div className="md:w-7/12 mt-5">
            <p className="text-sm text-black mb-2">
              Experiencia y Tecnología en
            </p>
            <h2 className="font-bold text-2xl mb-7 text-black">
              SOLUCIONES PARA TU SEGURIDAD
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-7"></div>
            <p className="mb-4 text-black">
              Nuestro equipo de expertos en seguridad analiza las necesidades de
              los clientes, evalúa los riesgos y ofrece soluciones adaptadas.
              Además, gestionamos los sistemas de forma remota de manera
              sencilla
            </p>
            <a
              href="./contacto"
              className="inline-block px-6 py-3 text-sm text-black bg-green-500 rounded"
            >
              Más información
            </a>
          </div>
          <div className="md:w-4/10 md:ml-8 mt-10 md:mt-15">
            <h2 className="font-normal text-xl mb-7 text-black">
              ¿Porqué Warden es tu decisión más inteligente?
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-7"></div>
            <ul className="list-disc ml-5 text-black">
              <li>Servicio de Alta Calidad</li>
              <li>Tecnología Integral, Escalable y de Fácil Uso.</li>
              <li>Precios Justos.</li>
              <li>Experiencia en instalaciones de seguridad.</li>
              <li>Soluciones integrales según tus necesidades</li>
              <li>Asesoría y atención personalizada</li>
              <li>Soluciones Confiables y funcionales.</li>
              <li>Servicio Postventa</li>
            </ul>
          </div>
        </div>
        <div className="relative mt-20">
          <img
            src="https://grandesmedios.com/wp-content/uploads/2021/12/La-importancia-de-la-instalacion-de-camaras-de-seguridad.jpg"
            alt="Banner"
            className="w-full h-screen object-cover bg-black"
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Te Brindaremos una Asesoría Profesional e Instalación de calidad.
            </h2>
            <p className="text-lg text-white mb-9">
              Diseñamos soluciones de seguridad a la medida de tus necesidades
            </p>
            <Link href="/contacto">
              <button className="text-white border-2 m-6 bg-blue-700 border-blue-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-700">
                Contactanos
              </button>
            </Link>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
