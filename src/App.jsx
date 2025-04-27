// import Features from "./components/Features";
import Hero from "./components/Hero";
import ProductGallery from "./components/ProductGallery";
import ReviewMap from "./components/ReviewMap";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import WhatsappCTA from "./components/WhatsappCTA";
import WhatsappWidget from "./components/WhatsappWidget";
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ProductGallery />
      <ReviewMap />
      <Benefits/>
      <Testimonials/>
      <WhatsappCTA/>
      <WhatsappWidget/>


      {/* <Features /> */}
    </div>
  );
}

export default App;
