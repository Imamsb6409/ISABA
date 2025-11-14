import ImgImam from "../assets/imam2.png";
import bgImage from "../assets/pasir-abu.jpg";
import Button from "./button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"  
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down w-16 h-16"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );

  const text = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      text.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  return (
    <div
      className="hero min-h-screen bg-cover bg-center  w-full text-textSub"
      id="home"
    >
      <div className="hero-content flex flex-col items-center justify-start pt-36 h-screen">
        <img
          src={ImgImam}
          className="w-[200px]  rounded-full  hover:shadow-primary hover:shadow-lg duration-400 ease-in-out transition-all hover:scale-105 hover:rotate-3"
        />
        <div className="text-center px-3 mt-4">
          <h1 className="text-5xl font-bold" ref={text}>
            HI I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x">
              Imam Sandy Bachtiar
            </span>
          </h1>
          <p className="py-6 split">
            <Typewriter
              options={{
                strings: [
                  "Santri Developer",
                  "PhotoGrapher Muda",
                  "Front End Developer",
                  "Santri Abu Dzar",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </p>
          <Button
            title={"Connect With Me"}
            href={"#about"}
            target={"_self"}
            className={` hover:shadow-md duration-400 ease-in-out transition-all`}
          />
        </div>
        <button className="animate-bounce mt-6 absolute bottom-6 cursor-pointer">
          <a href="#about">{arrowDown}</a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

//https://media.tenor.com/3f_h5KDUIjEAAAAM/team-wahoo-wahoo.gif
// https://media1.tenor.com/m/DMHk0nKIGmYAAAAd/byuntear-cachorro.gif
