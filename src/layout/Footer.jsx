export default function footer() {
  const arrowUpRight = (
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
      class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </svg>
  );

  return (
    <div className="h-max min-h-[30vh] pb-9 gap-y-8 pt-6 lg:flex-row lg:justify-around bg-gradient-to-b from-white via-white to-primary flex flex-col items-center justify-start border rounded-t-2xl text-white text-center py-4 w-full">
      <div className="flex flex-col gap-y-6">
        <div className=" flex flex-col justify-center items-start gap-y-3">
        <h2 className="text-gray-500 text-left text-[18px]">Navigation</h2>
        <div className="flex gap-x-8">
          <div className="flex flex-col gap-y-4 text-[24px]">
            <div className="border-b flex w-full gap-x-16 text-primary border-b-primary justify-between">
              <a href="#home">Home</a>
              {arrowUpRight}
            </div>
            <div className="flex border-b justify-between w-full gap-x-16 text-primary border-b-primary">
              <a href="#about">About</a>
              {arrowUpRight}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 text-[24px]">
            <div className="flex border-b justify-between w-full gap-x-16 text-primary border-b-primary">
              <a href="#projects">Projects</a>
              {arrowUpRight}
            </div>
            <div className="flex border-b justify-between w-full gap-x-16 text-primary border-b-primary">
              <a href="#contact">contact</a>
              {arrowUpRight}
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-pacifico">
      <span>ISABA</span> ©
      </h3>
      </div>
      <div className="lg:flex hidden flex-col items-center w-max my-4 lg:my-6 lg:-mt-2 order-2">
          <div
            
            className="text-center"
          >
            <h2 data-aos="fade-up"
            data-aos-duration="1000" className="text-[24px] lg:text-[32px] text-black xl:text-[41px] text-right font-semibold">
              Or you can contact me via
            </h2>
            <p data-aos="fade-up"
            data-aos-duration="1500" className="text-[20px] text-black lg:text-[24px] text-right xl:text-[26px] mt-2">
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
          <div className="flex mt-7 self-end gap-x-3 lg:mt-7 lg:gap-x-5">
            {/* instagram */}
            <a
              
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
            <a href="">
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
  );
}
