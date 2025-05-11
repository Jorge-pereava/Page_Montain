import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function Hero() {
    const phone = "573234830846"; // Numero de telefono y codigo del pais
    const message = "Hola, estoy interesado en sus colchones. ¿Podrían brindarme más información?";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
      <section
        className="relative bg-gradient-to-b from-sky-400 to-blue-600 text-white py-24 px-6 text-center overflow-hidden"
      >
        {/* Imagen de fondo desde el directorio local */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('landing-page/src/assets/Colchon.png')", // Ruta relativa al directorio public
          }}
        ></div>
  
        {/* Capa de contenido */}
        <div className="relative max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Despídete del estrés y despierta renovado cada mañana
            </h1>
            <p className="text-lg md:text-xl text-sky-100 drop-shadow-sm mb-10">
            Colchones diseñados para transformar tu descanso en bienestar real.
            </p>

            {/*BOTON DE COMPRAR AHORA */}
            <a
            id="compraYa"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-sky-100 transition duration-300 hover:scale-105 hover:shadow cursor: pointer"
            >
            <ShoppingCartIcon className="w-5 h-5" />
            ¡COMPRAR AHORA!
            </a>
        </div>
      </section>

    );
  }
  