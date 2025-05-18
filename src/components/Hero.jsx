import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png'

export default function Hero() {
  const phone = "573234830846"; // Numero de telefono y codigo del pais
  const message = "Hola, estoy interesado en sus colchones. ¿Podrían brindarme más información?";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <section
      className="relative bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#ffffff] text-gray-800 py-12 px-6 text-center overflow-hidden"
      style={{ animation: 'fadeIn 1.5s ease forwards', opacity: 0 }} // fade-in inicial
    >

      {/* SVG decorativos flotantes */}
      <svg
        className="absolute top-10 left-5 w-24 h-24 opacity-30 animate-float-slow pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="30" stroke="#60A5FA" strokeWidth="4" />
      </svg>

      <svg
        className="absolute bottom-20 right-10 w-20 h-20 opacity-25 animate-float-slow-reverse pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="#93C5FD"
        viewBox="0 0 64 64"
      >
        <rect x="10" y="10" width="44" height="44" rx="12" />
      </svg>

      {/* Capa de contenido */}
      <div className="relative max-w-3xl mx-auto">
        <div className="w-full flex justify-center md:justify-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-20 sm:h-20 md:h-22 lg:h-24 xl:h-28 w-auto"
            style={{ transformOrigin: 'center' }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Despídete del estrés y despierta renovado cada mañana
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Colchones diseñados para transformar tu descanso en bienestar real.
        </p>

        {/* BOTÓN DE COMPRAR AHORA */}
        <a
          id="compraYa"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-sky-100 transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          ¡COMPRAR AHORA!
        </a>
      </div>

      {/* Separador sutil */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-50">
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatSlowReverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: floatSlowReverse 5s ease-in-out infinite;
        }`}
      </style>
    </section>
  );
}
    