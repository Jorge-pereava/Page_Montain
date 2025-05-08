import { Star } from "lucide-react";

const RatingStars = ({ rating = 5, max = 5 }) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (i <= rating) {
      // Estrella llena
      stars.push(
        <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
      );
    } else if (i - rating < 1) {
      // Estrella media (puedes personalizar)
      stars.push(
        <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-200 opacity-50" />
      );
    } else {
      // Estrella vacía
      stars.push(
        <Star key={i} className="w-6 h-6 text-gray-300" />
      );
    }
  }

  return (
    <div className="flex space-x-2 justify-end">
      {stars}
    </div>
  );
};

export default RatingStars;
