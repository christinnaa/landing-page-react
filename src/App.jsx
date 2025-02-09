import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InclusionsSection from "./components/InclusionsSection";
import InformationSection from "./components/InformationSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <InformationSection />
      <InclusionsSection />
      <Footer />
    </div>
  );
}

export default App;
