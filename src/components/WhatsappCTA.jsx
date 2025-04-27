import { MessageCircle } from "lucide-react";

const WhatsappCTA = () => {
  const phone = "573234830846"; // ← reemplaza con tu número (con código país)
  const message = "Hola, estoy interesado en sus colchones. ¿Podrían brindarme más información?";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-green-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Duerme tranquilo, guarda seguro. <b className="hidden md:block"/>
          ¡Tu descanso comienza aqui!
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Estamos disponibles en WhatsApp para ayudarte a encontrar el colchón ideal para ti.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default WhatsappCTA;
