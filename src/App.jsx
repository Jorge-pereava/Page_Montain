import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Benefits2 from "./components/Benefits2.jsx";
import OfferSection from "./components/OfferSeccion.jsx";
import WhatsappWidget from "./components/WhatsappWidget.jsx";
import ImageSeccion from "./components/ImageSeccion.jsx";
import Testimonials from "./components/Testimonials.jsx";


function App() {
  return (   
    <div className="min-h-screen bg-white text-gray-900">
      <Hero/>
      <Benefits/>
      <OfferSection/>
      <WhatsappWidget/>
      <ImageSeccion/>
      <Benefits2/>
      <Testimonials/>
    </div>
  );
}

export default App;
