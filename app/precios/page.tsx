import React from "react";

const productos = [
  {
    id: 1,
    nombre: "Warden nivel 1",
    descripcion: "Monitoreo de cámaras y movimiento con alarma, 'El servicio incluye 2 camaras, 3 sensores y control de alarma, el añadido de más cámaras o sensores incluyen tarifa extra'",
    precio: "$5,000",
    imagen: "https://equipamientoyseguridad.com/wp-content/uploads/2020/01/sistemas-de-alarma.png",
    imagenIzquierda: false,
  },
  {
    id: 2,
    nombre: "Warden nivel 2",
    descripcion: "Incluyendo el servicio de nivel 1, Warden nivel 2 integra 2 sensores de fuego y 2 de gas tipo metáno, LP y natural",
    precio: "$7,000",
    imagen: "https://constructivo.com/imgPosts/1530056348op2GwzSx.jpg",
    imagenIzquierda: true,
  },
  {
    id: 3,
    nombre: "Warden nivel 3",
    descripcion: "Incluyendo el servicio de nivel 2, Warden nivel 3 integra un sistema para aumento de protección a redes wifi",
    precio: "$8,000",
    imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/06/wifi.jpg?tf=3840x",
    imagenIzquierda: false,
  },
  {
    id: 4,
    nombre: "Warden nivel 4",
    descripcion: "Incluyendo el servicio nivel 3, Warden nivel 4 integra aplicación móvil y acceso al Warden web dónde podras monitorear en tiempo real estadísticas en forma de dashboard sobre los niveles de concentración de gases y humo, ademas de incluir un monitor tipo espejo siempre activo donde podrás visualizar lo ya mencionado junto con la videograbación de las cámaras de seguridad exteriores e interiores, controlar las alarmas y observar la seguridad wifi",
    precio: "$12,000",
    imagen: "https://fundaciontelefonica.com.ec/wp-content/uploads/2016/11/miguel-rojas-seguridad-informatica-familia.jpg",
    imagenIzquierda: true,
  },
];

const Precios = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Warden Tech-Secure</div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className={`flex ${
              producto.imagenIzquierda ? "flex-row-reverse" : "flex-row"
            } items-center bg-gray-200 my-4 rounded overflow-hidden shadow-lg`}
          >
            <img
              className="w-1/2 h-auto"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <div className="w-1/2 p-4">
              <h3 className="font-bold text-xl mb-2 text-black">{producto.nombre}</h3>
              <p className="text-gray-700 mb-4 text-justify">{producto.descripcion}</p>
              <p className="text-gray-900 font-bold">{producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Precios;
