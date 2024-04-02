 const Navigation = () =>{
    return(
        <div>
            <nav className="absolute top-5 right-0 z-10">
            <a href="/" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Home</a>
            <a href="./productos" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Productos</a>
            <a href="./precios" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Precios</a>
            <a href="./acerca" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Warden Tech-Secure</a>
            <a href="./contacto" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Contacto</a>
            <a href="./miwarden" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Mi Warden</a>
            </nav>
        </div>
    );
 }

 export default Navigation; 