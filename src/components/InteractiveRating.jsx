import { useState } from "react";
import { Star } from "lucide-react";

const InteractiveRating = ({ max = 5, onChange }) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex justify-end space-x-2">
      {Array.from({ length: max }, (_, i) => {
        const index = i + 1;
        const isFilled = index <= (hovered || selected);

        return (
          <Star
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(index)}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default InteractiveRating;
