import HeroSection from "../components/HeroSection";
import About from "../components/About";
import PortfolioPage from "../components/portfolio";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contact from "../components/Contact";
const MainContent = () => {
  return (
    <div className="font-inter tracking-wide flex flex-col justify-center items-center bg-bgUtama overflow-hidden">
      <Header />
      <HeroSection />
      <About />
      <PortfolioPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainContent;
