import React from "react";
import Image from "next/image";

const Acerca = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <title>Acerca de Warden</title>
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <main className="flex-grow">
        <div className="m-10 mb-24">
        <h1 className="font-bold text-4xl text-green-500 mb-7 text-center">WARDEN <span className="text-blue-500">TECH-SECURE</span></h1>
          <section className="mb-4 flex">
            <div className="w-1/2 pr-8">
              
              <h2 className="font-bold text-4xl text-blue-700">
                Acerca de nosotros
              </h2>
              <br />
              <br />
              <p className="text-black">
                <span className="font-bold">PROBLEMATICA: </span>
                En la actualidad, el problema con la seguridad se ha convertido
                en un problema mayor. La inseguridad ha ido en aumento, lo que
                ha causado que las personas ya no se sienten seguras ni en su
                propia casa, y esto mismo sucede utilizando el teléfono, ya que,
                en múltiples ocasiones roban la información a través de
                direcciones ip. En el aspecto doméstico, la inseguridad aumenta
                con la introducción de sistemas de vigilancia y dispositivos
                inteligentes, que, paradójicamente, también generan nuevas
                amenazas. El uso del teléfono enfrenta amenazas a la privacidad
                mediante ataques a través de direcciones IP, comprometiendo
                datos sensibles y generando desconfianza en la tecnología. El
                nulo conocimiento en estas áreas de la tecnología facilita los
                ataques cibernéticos.
              </p>
              <br />
              <p className="text-black text-justify">
                <span className="font-bold">ALCANCE: </span>
                Crear un sistema de seguridad basado en el uso de internet de
                las cosas (IoT), que integrará distintos elementos para la
                seguridad, permitiendo la seguridad de los usuarios. Este
                sistema está pensado para usarse en casas, residencias, y en
                algún momento en escuelas, además de brindar una mayor seguridad
                en las instituciones, cuando en algún momento los alumnos entren
                a la red, sus datos no se vean comprometidos.
              </p>
              <br />
              <p className="text-black text-justify">
                <span className="font-bold">METODOLOGÍA: </span>
                Dentro del desarrollo del proyecto, el equipo de trabajo tomó la
                decisión de hacer uso de la metodología de scrum; esta decisión
                fue tomada debido a lo practica que resulta el usar esta
                metodología a la hora de realizar un proyecto de esta escala,
                dando una facilidad a la hora de repartir los roles en base a
                las diferentes fortalezas de los integrantes del equipo de
                trabajo, así mismo, el poder realizar entregas de avances para
                una retroalimentación, en este caso, de la autoridad encargada y
                posteriormente poder retomar el proyecto desde ese punto para
                realizar avances y correcciones, todo esto sumado a la facilidad
                de la asignación de las diversas actividades dentro del cuadro
                scrum para su posterior cumplimiento. Todo esto concluyó en la
                decisión de optar por utilizar esta metodología por parte del
                equipo de trabajo para poder concluir con el proyecto
                estipulado.
              </p>
              <br />
              <h3 className="font-light text-2xl text-black">
                Filosofia y Principios
              </h3>
              <br />
              <p className="text-black text-justify">
                Somos una compañía de convicciones solidas, esto se manifiesta
                en la forma como asesoramos y diseñamos nuestras soluciones de
                seguridad para proteger a nuestros clientes, a través de los
                productos y servicios que ofrecemos. Nuestra calidad humana,
                creatividad y habilidad son las herramientas más valiosas que
                tenemos en el momento de presentar una solución. En HQE estamos
                convencidos de lo que hacemos, de los objetivos que perseguimos
                y de la misión que tenemos.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="/img/poster.jpg"
                alt="Imagen descriptiva de la empresa"
                className="w-auto h-auto mt-14 ml-10"
              />
            </div>
          </section>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="font-bold text-2xl text-blue-700">Misión</h2>
              <br />
              <p className="text-black text-justify">
                PROPORCIONAR SEGURIDAD PARA LA PROTECCION DE NUESTROS CLIENTES,
                SUS FAMILIAS Y SUS ACTIVOS.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="font-bold text-2xl text-blue-700">Visión</h2>
              <br />
              <p className="text-black text-justify">
                {" "}
                SER RECONOCIDOS COMO REFERENTES EN EL SECTOR DE SISTEMAS DE
                SEGURIDAD POR LA CONFIANZA DE NUESTROS CLIENTES.
              </p>
            </div>
          </div>

          <div className="mx-10 my-8 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-2xl text-blue-700">
                PROPUESTAS DE VALOR
              </h2>
              <div className="w-16 h-1 bg-blue-500 my-4"></div>
            </div>
            <div>
              <ul className="list-disc ml-5 text-black">
                <li>Calidad en el Servicio y en el Producto</li>
                <li>Asesoría personalizada</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-5 text-black">
                <li>Tecnología Adaptativa</li>
                <li>Precio Justo</li>
              </ul>
            </div>
          </div>
          <div className="w-8/126 h-1 bg-amber-500 my-16"></div>

          {/**COMERCIAL */}
          <h1 className="text-amber-500 font-bold text-2xl mb-4">ADVERTISEMENT - ANUNCIO</h1>
          <iframe
            src="https://drive.google.com/file/d/18OeHFxc_YfPodu97l8GEfbTuOaADADe6/preview"
            width="1450"
            height="724"
            allow="autoplay"
          ></iframe>

          <div className="w-8/126 h-1 bg-blue-500 my-16"></div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl text-blue-700">RESULTADOS</h2>
            <div className="w-16 h-1 bg-green-500 my-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado1.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado2.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado3.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado4.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado5.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/resultado6.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <video className="w-full max-w-md" controls>
                <source src="/video/video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-14">
            <h2 className="font-bold text-2xl text-blue-700">CONOCENOS</h2>
            <div className="w-16 h-1 bg-green-500 my-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/ISAI.jpg"
                alt="Warden Tech-Secure"
                className="w-full"
              />
              <h2 className="text-black font-bold text-center">ISAI</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/ALE.JPG"
                alt="Warden Tech-Secure"
                className="w-auto"
              />
              <h2 className="text-black font-bold text-center">ALEJANDRO</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/FER.webp"
                alt="Warden Tech-Secure"
                className="w-auto"
              />
              <h2 className="text-black font-bold text-center">FERNANDO</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/EDU.jpg"
                alt="Warden Tech-Secure"
                className="w-auto"
              />
              <h2 className="text-black font-bold text-center">EDUARDO</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <img
                src="/img/YAHIR.webp"
                alt="Warden Tech-Secure"
                className="w-auto"
              />
              <h2 className="text-black font-bold text-center">YAHIR</h2>
            </div>
          </div>
        </div>
        {/* integrar abajo*/}
      </main>
    </div>
  );
};

export default Acerca;
