import { button } from "framer-motion/client";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const buttonClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {/*dekstop navbar */}
      <div className="hidden md:flex gap-x-5 text-textSub font-inter text-lg">
        <a href="#home" className="cursor-pointer hover:font-extrabold">Home</a>
        <a href="#about" className="cursor-pointer hover:font-extrabold">About</a>
        <a href="#projects" className="cursor-pointer hover:font-extrabold">Projects</a>
        <a href="#contact" className="cursor-pointer hover:font-extrabold">Contact</a>
      </div>
      {/* mobile navbar */}
      {/* icon menu */}
      <button
        onClick={buttonClick}
        className={"md:hidden cursor-pointer text-textSub "}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>
      <div
        id="menu"
        className={
          toggleMenu
            ? "translate-y-0 flex absolute flex-col gap-y-4  text-center bg-bgUtama top-0 right-0 left-0 py-4 transition-all duration-500 ease-in-out shadow-lg z-10"
            : "-translate-y-[180px] flex absolute flex-col gap-y-4  text-center bg-bgUtama top-0 right-0 left-0 py-4 transition-all duration-500 ease-in-out shadow-lg z-10"
        }
      >
        <span onClick={buttonClick} className="absolute top-4 right-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
        <a href="#home" className="font-inter hover:font-bold" onClick={buttonClick}>Home</a>
        <a href="#about" className="font-inter hover:font-bold" onClick={buttonClick}>About</a>
        <a href="#projects" className="font-inter hover:font-bold" onClick={buttonClick}>Projects</a>
        <a href="#contact" className="font-inter hover:font-bold" onClick={buttonClick}>Contact</a>
      </div>
    </>
  );
}
