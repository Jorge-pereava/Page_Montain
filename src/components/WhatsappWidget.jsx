import { MessageCircle } from "lucide-react";

const WhatsappWidget = () => {
  const phone = "573234830845"; // ← Reemplaza con tu número con código de país
  const message = "Hola, estoy interesado en sus colchones. ¿Pueden brindarme más información?";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Chat en WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsappWidget;
