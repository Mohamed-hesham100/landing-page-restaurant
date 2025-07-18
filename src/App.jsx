import "./App.css";
import CommitmentSection from "./components/CommitmentSection";
import DetailMenuPage from "./components/DetailMenuPage";
import DiningSection from "./components/DiningSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarqueeSection from "./components/MarqueeSection";
import MenuPage from "./components/MenuShowcaseSection";
import ReservationPage from "./components/ReservationPage";
import RestaurantMenu from "./components/restaurantMenu";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  return (
    <>
      <Home />
      <MarqueeSection />
      <DiningSection />
      <MenuPage />
      <DetailMenuPage />
      <CommitmentSection />
      <RestaurantMenu />
      <TestimonialsSection />
      <ReservationPage />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;
