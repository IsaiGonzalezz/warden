import React from "react";

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Camaras de seguridad",
      descripcion: "Cámara de exterior",
      precio: "$250",
      imagen: "https://cdn.pixabay.com/photo/2016/01/06/17/26/camera-1124585_1280.jpg",
    },
    {
      id: 2,
      nombre: "Sensor de movimiento",
      descripcion: "Sensor de movimiento",
      precio: "$200",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_800719-MLM31223917751_062019-O.webp",
    },
    {
      id: 3,
      nombre: "Sensor de Gas",
      descripcion: "Sensor de gas metáno/LP/natural",
      precio: "$300",
      imagen: "data:image/jpeg;base64,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EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==",
    },
    {
      id: 4,
      nombre: "Monitor Espejo",
      descripcion: "Monitor Espejo",
      precio: "$2,200",
      imagen: "https://lght.com.mx/wp-content/uploads/2019/05/0FC42B0D-C5AA-4F48-AD54-9B9DF7FFFD35.jpeg",
    },
    {
      id: 5,
      nombre: "Alarma",
      descripcion: "Alarma",
      precio: "$500",
      imagen: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/200389199/alarma-o-timbre-con-sensor-de-movimiento.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <title>Productos</title>
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>

      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{producto.nombre}</h3>
              <p className="text-gray-700 mb-4">{producto.descripcion}</p>
              <p className="text-gray-900 font-bold">{producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
