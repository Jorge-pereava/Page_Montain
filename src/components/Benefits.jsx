import { CheckCircle } from "lucide-react";
import colchon3 from "../assets/colchon3.jpg";
const Benefits = () => {
  const highlights = [
    "Caja fuerte integrada para guardar objetos de valor",
    "Firmeza ortopédica 8/10: Ideal para una buena postura",
    "Sistema de espuma poliédrica y compact foam para mayor confort",
    "Altura de 36 cm y acabadi en tela Jacquard.",
    "Garantía de 5 años",
  ];

  return (
    <section id="productos" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-900">¿Por qué elegir nuestros colchones?</h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            ¡Beneficios del colchón Safe Dreams!
          </h3>
          {/* <p className="text-gray-700 mb-6">
            Nuestros colchones están diseñados con materiales de última generación que se adaptan
            a tu cuerpo, regulan la temperatura y alivian puntos de presión.
          </p> */}

          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="text-indigo-600 w-5 h-5 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <img
            src={colchon3}
            alt="Beneficios del colchón"
            className="rounded-2xl shadow-lg max-h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
