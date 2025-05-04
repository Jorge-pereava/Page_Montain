import colchon4 from "../assets/colchon4-Hero.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-100 via-white to-indigo-50 overflow-hidden">
      <div className="flex items-center justify-center pt-10 h-12 md:h-16 lg:h-20 w-auto object-contain ">
        <img 
          src={logo}
          alt="Logo"
          className="h-40 w-auto"
        />
      </div>
      <div className="mt-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* TEXTO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Colchón Safe Dream <br className="hidden md:block"/>de Ramguiflex
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Descansa con seguridad y confort.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            El único colchón ortopédico con caja de seguridad integrada.
          </p>
          <a
            href="#productos"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition transform shadow-lg"
          >
            ¡COMPRA YA!
          </a>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center md:justify-end">
          <img
            src= {colchon4}
            alt="Colchón cómodo"
            className="rounded-3xl shadow-xl max-h-[400px] w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* ONDA DECORATIVA */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,213.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Hero;

  