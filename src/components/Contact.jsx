import ContactForm from "./ContactForm";
import Typewriter from "typewriter-effect";
import React, { useRef, useEffect, useState } from "react";

export default function Contact() {
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
    <div
      ref={sectionRef}
      id="contact"
      className="min-h-screen w-screen lg:w-[90%] pt-14 pb-5 flex flex-col items-center justify-center gap-y-5 bg-[#F1F5F9] px-5 md:px-0 "
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center w-full flex flex-col items-center px-1"
      >
        <h1 className="text-[36px] lg:text-[48px] xl:text-[62px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x from-primary to-secondary">
          Lets's Connect
        </h1>
        <hr class="h-[2px] w-1/2  border-0 bg-gradient-to-r from-primary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x to-secondary rounded-full" />
        <div  className="text-[16px] sm:text-[18px] lg:text-[24px] xl:text-[28px] lg:m-3">
          {startTyping && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Interested in working together or just chatting about creative ideas? Drop me a message!"
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
        </div>
      </div>
      {/* form */}
      <div className="flex flex-col items-center gap-y-6 lg:justify-between md:min-w-max lg:w-1/2 lg:flex-col lg:gap-x-6 lg:items-start md:rounded-[50px] lg:rounded-none rounded-[100px] bg-bgDivider lg:pb-0 pb-9">
        <ContactForm />
        <div className="flex lg:hidden flex-col items-center w-full my-4 lg:my-6 lg:-mt-2 order-2">
          <div className="text-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[24px] lg:text-[32px] xl:text-[41px] text-center font-semibold"
            >
              Or you can contact me via
            </h2>
            <p className="text-[20px] lg:text-[24px] xl:text-[26px] mt-2">
              Email:
              <a
                href="mailto:imam0406@student.abudzar.sch.id"
                className="text-primary hover:text-gray-800"
              >
                {" "}
                imam0406@student.abudzar.sch.id
              </a>
            </p>
          </div>
          <div className="flex mt-7 gap-x-3 lg:mt-7 lg:gap-x-5">
            {/* instagram */}
            <a
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              href="https://www.instagram.com/imamsb_/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram text-primary hover:text-blue-950 w-[50px] h-[50px]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>
            </a>
            {/* linkedin */}
            <a
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              href="https://www.linkedin.com/in/imamsb/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin text-primary hover:text-blue-950 w-[50px] h-[50px]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
            {/* github */}
            <a
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              href="https://github.com/Imamsb"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github text-primary hover:text-blue-950 w-[50px] h-[50px]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            {/* whatsapp */}
            <a data-aos="zoom-in-up" data-aos-duration="3000" href="">
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp text-primary hover:text-blue-950 w-[50px] h-[50px]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
