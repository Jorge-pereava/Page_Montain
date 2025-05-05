import toalla5 from "../assets/toalla5.jpg";
import almohada from "../assets/almohada6.jpg";
const productos = [
    {
      nombre: "Colchón Hybrid Confort",
      imagen: almohada,
    },
    {
      nombre: "Colchón Ortopédico Zen",
      imagen: toalla5,
    },
    
    // Puedes seguir agregando más productos aquí
  ];
  
  const ProductGallery = () => {
     return (
    <section id="productos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explora nuestros productos</h2>
          <p className="text-gray-600 mb-12">La mejor calidad para el mejor descanso.</p>
  
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
            {productos.map((p, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{p.nombre}</h3>
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
  