import colchon1 from "../assets/colchon1.jpg";
import colchon2 from "../assets/colchon2.jpg";
import colchon3 from "../assets/colchon3.jpg";

const colchones = [
  {
    nombre: "Colchón Nube Deluxe",
    imagen: colchon1,
    reseña: "Comodidad superior con espuma viscoelástica de alta densidad. Ideal para descansar profundamente.",
    precio: "$499 USD",
  },
  {
    nombre: "Sueño Premium Gel",
    imagen: colchon2,
    reseña: "Tecnología de enfriamiento con gel. Perfecto para climas cálidos o personas calurosas.",
    precio: "$620 USD",
  },
  {
    nombre: "Espuma Ortopédica Zen",
    imagen: colchon3,
    reseña: "Diseñado para brindar soporte en espalda y cuello. Recomendado por expertos.",
    precio: "$550 USD",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestros Colchones Estrella</h2>
        <p className="text-gray-600 mb-12">
          Tecnología, diseño y descanso en un solo lugar.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {colchones.map((c, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={c.imagen} alt={c.nombre} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{c.nombre}</h3>
                <p className="text-gray-600 mb-2">{c.reseña}</p>
                <span className="text-indigo-600 font-bold">{c.precio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
