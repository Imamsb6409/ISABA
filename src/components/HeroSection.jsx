import { register } from "swiper/element";
import ImgImam from "../assets/imam2.png";
import bgImage from "../assets/pasir-abu.jpg";
import Button from "./button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
      register();
    }, []);
  
  
  

  useEffect(() => {
    if (text.current) {
      gsap.from(text.current, {
        y: -100,
        opacity: 0,
        onComplete: () => {
          gsap.to(text.current, {
            y: 0,
            opacity: 1,
            duration: 1,
          });
        },
      });
    }
  }, []);

  return (
    <div
      className="hero min-h-screen bg-cover bg-center  w-full text-textSub"
      id="home"
    >
      <div className="hero-content flex flex-col items-center justify-start pt-40 h-screen">
        <img src={ImgImam} className="w-[200px]  rounded-full " />
        <div className="text-center px-3">
          <h1 className="text-5xl font-bold" ref={text}>
            HI I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x">
              Imam Sandy Bachtiar
            </span>
          </h1>
          <p className="py-6">NPC And Web Developer</p>
          <Button title={"Connect With Me"} href={"#about"} />
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
