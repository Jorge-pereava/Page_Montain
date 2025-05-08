import { Star } from "lucide-react";
import colchon4 from "../assets/colchon4-Hero.jpg";
import logo from "../assets/logo.png";
import RatingStars from "./RatingStars";
import InteractiveRating from "./InteractiveRating";

const Hero = () => {
  const phone = "573234830846"; // ← reemplaza con tu número (con código país)
  const message = "Hola, estoy interesado en sus colchones. ¿Podrían brindarme más información?";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <section className="relative bg-gradient-to-r from-indigo-100 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-6">
      {/* TEXTO */}
      <div className="text-center md:text-left">
        <div className="w-full flex justify-center md:justify-start">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto"
            style={{ transformOrigin: 'center' }}
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Colchón Safe Dream <br className="hidden md:inline" /> de Ramguiflex
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Descansa con seguridad y confort.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          El único colchón ortopédico con caja de seguridad integrada.
        </p>
        <a
          id="compraYa"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
        >
          ¡COMPRA YA!
        </a>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-center md:justify-end flex-col items-center mt-4">
        <img
          src={colchon4}
          alt="Colchón cómodo"
          className="rounded-3xl shadow-xl w-full max-w-md object-contain hover:scale-105 transition-transform duration-500"
        />
          {/* Estrellas de calificación */}
          <div className="flex space-x-6 justify-center mt-4 flex-col items-center">
            <RatingStars rating={5}/>
            <InteractiveRating onChange={(value) => console.log("Valor seleccionado:", value)} />
            <p className="text-sm text-gray-600 mt-2">5.0 basado en más de 100 reseñas</p>

        </div>
      </div>

    </div>
    </section>
  );
};

export default Hero;

  