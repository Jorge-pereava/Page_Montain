// import { CheckCircle } from "lucide-react";
// import ImageSeccion from "./ImageSeccion"
import Colchon from "../assets/Colchon.png"

const Benefits = () => {
  const highlights = [
    "🌙 Sueño profundo y continuo gracias a su diseño ortopédico",
    "🧘‍♂️ Reducción del estrés y las tensiones musculares",
    "🌿 Frescura y confort durante toda la noche",
    "🛡️ Hipoalergénico y libre de ácaros",
    "💪 Alta durabilidad y soporte firme de larga duración",
    "🔇 Silencioso y sin movimientos molestos",
    "🛏️ Ideal para todo tipo de cuerpos y posiciones de sueño",  
  ];

  return (
    <section id="productos" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <h2 className="text-4xl font-bold text-indigo-900">¿Por qué elegir nuestros colchones?</h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            ¡Beneficios del colchón Safe Dreams!
          </h3>
          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-4xl mx-auto">
          <img
            src= {Colchon} // Imagen local, asegúrate que esté en /public/images/
            alt="Colchón moderno flotante"
            className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
