import { Star } from "lucide-react";
import persona_icon from "../assets/persona_icon.png"
const testimonials = [
  {
    name: "Diana y Miguel. 38 años",
    comment: "Desde que compramos el colchón, dormimos sin interrupciones. Nos despertamos con energía y cero dolores.",
    avatar: persona_icon,
    rating: 5,
  },
  {
    name: "Carlos M. 46 años",
    comment: "Trabajo bajo mucho estrés. Este colchón ha sido mi mejor inversión para descansar de verdad.",
    avatar: persona_icon,
    rating: 5,
  },
  {
    name: "Laura G. 32 años",
    comment: "Sufría de insomnio por un mal colchón. El cambio fue inmediato. Ahora descanso toda la noche.",
    avatar: persona_icon,
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex space-x-1 text-yellow-500">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={18} fill={i < count ? "#facc15" : "none"} strokeWidth={1.5} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Nuestros clientes opinan</h2>
        <p className="text-gray-600 mt-4 text-lg">
          La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <StarRating count={t.rating} />
              </div>
            </div>
            <p className="text-gray-700">{t.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
