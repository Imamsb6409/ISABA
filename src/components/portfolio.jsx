import CardPortfolio from "./cardPortfolio";
import Typewriter from "typewriter-effect";
import React, { useRef, useEffect, useState } from "react";

export default function Portfolio() {
  const PortfolioRef = useRef(null);
  const [startPortfolioTyping, setStartPortfolioTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartPortfolioTyping(true);
          if (PortfolioRef.current) observer.unobserve(PortfolioRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (PortfolioRef.current) {
      observer.observe(PortfolioRef.current);
    }

    return () => {
      if (PortfolioRef.current) observer.unobserve(PortfolioRef.current);
    };
  }, []);

  return (
    <div
      id="projects"
      className="min-h-screen pt-14 pb-5 flex flex-col items-center justify-center gap-y-5"
    >
      <div className="text-center w-full flex flex-col items-center gap-y-4 px-4 sm:px-10">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-[36px] lg:text-[48px] xl:text-[62px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x from-primary to-secondary"
        >
          Crafted By Me
        </h1>
        <hr
          className={`h-[2px] -mt-3 w-1/2 border-0 bg-gradient-to-r from-primary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x to-secondary rounded-full`}
        />

        <p
          ref={PortfolioRef}
          className="text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[24px] "
        >
          {startPortfolioTyping && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Each project reflects my dreams, efforts, and hope to make education more alive and heartfelt."
                  )
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 30,
                cursor: "",
              }}
            />
          )}
        </p>
      </div>
      {/* cardPortfolio */}
      <CardPortfolio />
    </div>
  );
}
