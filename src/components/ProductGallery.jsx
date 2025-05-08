import protectorColchon from "../assets/protectorColchon.jpg";
import almohada from "../assets/almohada6.jpg";
const productos = [
    {
      nombre: "Almohada Spumagic con gel",
      imagen: almohada,
    },
    {
      nombre: "Protector de colchón Damasco",
      imagen: protectorColchon,
    },
    
    // Puedes seguir agregando más productos aquí
  ];
  
  const ProductGallery = () => {
     return (
      <section id="productos" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explora nuestros productos</h2>
          <p className="text-gray-600 mb-12 text-base md:text-lg">
            La mejor calidad para el mejor descanso.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {productos.map((p, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="w-full h-[400px] flex items-center justify-center p-4 text-center">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-center">{p.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">{p.precio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductGallery;
  