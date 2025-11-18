import HeroSection from "../components/HeroSection";
import About from "../components/About";
import PortfolioPage from "../components/portfolio";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contact from "../components/Contact";
import Carousel from "../components/Carousel";

import img1 from "../assets/slider-portfolio/isandtier-mockup.png";
import img2 from "../assets/slider-portfolio/tapas-mockup.png";
import img3 from "../assets/slider-portfolio/yourlink-mockup.png";
import img4 from "../assets/slider-portfolio/yourlidz-mockup.png";
import img5 from "../assets/slider-portfolio/itsmamsb-mockup.png";

import Typewriter from "typewriter-effect";
import React, { useRef, useEffect, useState } from "react";

const imageUrls = [
  {
    src: img1,
    alt: "Isandtier Mockup",
    title: "Isandtier Project",
    description: "Website edukasi interaktif untuk santri modern.",
    ctaText: "Lihat Detail",
    ctaLink: "https://first-tailwind-project-psi.vercel.app/",
  },
  {
    src: img2,
    alt: "Tapas Mockup",
    title: "Tapas Platform",
    description: "Platform belajar dengan animasi dan kuis.",
    ctaText: "Jelajahi",
    ctaLink: "https://tapasride.vercel.app/",
  },
  {
    src: img3,
    alt: "YourLink Mockup",
    title: "YourLink Showcase",
    description: "Portofolio kreatif dan presentasi bilingual.",
    ctaText: "Kunjungi",
    ctaLink: "https://yourlink.vercel.app/",
  },
  {
    src: img4,
    alt: "YourLidz Mockup",
    title: "YourLidz Showcase",
    description: "Portofolio kreatif dan presentasi bilingual.",
    ctaText: "Kunjungi",
    ctaLink: "https://yourlidz.vercel.app/",
  },
  {
    src: img5,
    alt: "Itsmamsb Mockup",
    title: "Itsmamsb Showcase",
    description: "Portofolio kreatif dan presentasi bilingual.",
    ctaText: "Kunjungi",
    ctaLink: "https://itsmamsb.vercel.app/",
  },
];

const MainContent = () => {
  const sectionRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="font-inter tracking-wide flex flex-col justify-center items-center bg-bgUtama overflow-hidden">
      <Header />
      <HeroSection />
      <About />
      <PortfolioPage />
      <div
        ref={sectionRef}
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center w-full flex flex-col items-center px-1 mb-6"
      >
        <h1 className="text-[36px] lg:text-[48px] xl:text-[62px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x from-primary to-secondary">
          Project Highlights
        </h1>
        <hr class="h-[2px] w-1/2  border-0 bg-gradient-to-r from-primary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x to-secondary rounded-full" />
        <div className="text-[16px] sm:text-[18px] lg:text-[24px] xl:text-[28px] lg:m-3">
          {startTyping && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "These highlights showcase my journey in building interactive, educational, and youth-focused digital experiences."
                  )
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 10,
                cursor: "",
              }}
            />
          )}
        </div>
      </div>
      <Carousel images={imageUrls} interval={3000} />

      <Contact />
      <Footer />
    </div>
  );
};

export default MainContent;
