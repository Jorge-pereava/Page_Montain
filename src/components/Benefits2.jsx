import { CheckCircle } from "lucide-react";
// import AutoPlayVideo from './AutoPlayVideo'
import AutoPlayWithSound from './AutoPlayWithSound'

const Benefits2 = () => {
  const highlights = [
    "Caja fuerte integrada para guardar objetos de valor",
    "Firmeza ortopédica 8/10: Ideal para una buena postura",
    "Sistema de espuma poliédrica y compact foam para mayor confort",
    "Altura de 36 cm y acabadi en tela Jacquard.",
    "Garantía de 5 años",  
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
                <CheckCircle className="text-indigo-600 w-5 h-5 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* VIDEO */}
        <div className="flex justify-center">
          <div className="w-[300px] max-w-[700px] h-auto mx-auto rounded-lg shadow-lg responsive-video">
            <AutoPlayWithSound />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits2;
