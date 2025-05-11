import Colchon from "../assets/Colchon.png"

export default function ImageSeccion() {
    return (
      <section className="bg-white py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src= {Colchon}
            alt="Colchón moderno flotante"
            className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    );
  }
  