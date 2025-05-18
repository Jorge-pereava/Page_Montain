import { MessageCircle } from "lucide-react";

export default function OfferSection() {
    const phone = "573234830846"; // Numero de telefono y codigo del pais
    const message = "Hola, estoy interesado en sus colchones. ¿Podrían brindarme más información?";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¡Oferta Especial por Tiempo Limitado!
          </h2>
          <p><b>Producto:</b><br/>
            Colchón Ortopédico Safe Dreams
          </p>
  
          <div className="flex flex-col items-center gap-4 mt-2">
            <span className="text-xl text-gray-500 line-through">Antes: $1.850.000</span>
            <span className="text-4xl font-extrabold text-green-600">Ahora: $1.550.000</span>
            <p className="text-gray-600 text-xs">
              Precio para colchón de 140 x 190.
            </p>
          </div>
  
          <p className="mt-6 text-gray-600">
            Aprovecha esta promoción exclusiva y duerme como nunca antes.
          </p>
  
          {/*BOTON DE COMPRAR AHORA */}
          <a
            id="compraYa"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-full shadow-md hover:bg-sky-100 transition duration-300 hover:scale-105 hover:shadow cursor: pointer mt-4"
            >
            <MessageCircle className="w-5 h-5" />
            ¡Lo quiero con descuento!
            </a>
        </div>
      </section>
    );
  }
  