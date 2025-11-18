import Navbar from "../components/Navbar";
import Logo from "../components/logo";
import React, { useState, useEffect } from 'react';


export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100); // ubah threshold sesuai kebutuhan
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div id="header" className={`transition-opacity duration-100 ${isScrolled ? 'bg-opacity-50' : 'bg-opacity-100'} shadow-md  flex justify-between items-center p-4 px-8  bg-[#F1F5F9] fixed z-50 top-0 w-full`}>
      <Logo />
      <Navbar />
    </div>
  );
}
