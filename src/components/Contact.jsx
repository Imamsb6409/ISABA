

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen w-screen lg:w-[90%] pt-14 pb-5 flex flex-col items-center justify-center gap-y-5 bg-[#F1F5F9] px-5 md:px-0 "
    >
      <div className="text-center w-max px-1">
        <h1 className="text-[36px] lg:text-[48px] xl:text-[62px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x from-primary to-secondary">
          Let’s Build Something
        </h1>
        <h2 className="text-[24px] lg:text-[32px] xl:text-[41px] -mt-3">
          Meaningful Together
        </h2>
        <hr class="h-[2px]  border-0 bg-gradient-to-r from-primary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x to-secondary rounded-full" />
      </div>
      {/* form */}
      <div className="flex flex-col items-center gap-y-6 lg:justify-between md:min-w-[95%] lg:w-[100%] lg:flex-row lg:gap-x-6 lg:items-start lg:pl-4 lg:rounded-xl lg:bg-bgDivider">
        <form
          action=""
          className="w-full max-w-lg lg:max-w-none bg-white p-8 rounded-lg shadow-lg lg:order-3"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm lg:text-lg font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm lg:text-lg  font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm lg:text-lg font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="px-4 py-2 bg-primary text-white lg:text-lg  rounded-md hover:bg-secondary"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col items-center mt-4 lg:mt-6 lg:ml-2">
          <div className="text-center">
            <h2 className="text-[24px] lg:text-[32px] xl:text-[41px] text-center font-semibold">
              Or you can contact me via
            </h2>
            <p className="text-[20px] lg:text-[24px] xl:text-[26px] mt-2">
              Email:
              <a
                href="mailto:imam0406@student.abudzar.sch.id"
                className="text-primary hover:text-secondary"
              >
                {" "}
                imam0406@student.abudzar.sch.id
              </a>
            </p>
          </div>
          <div className="flex mt-7 gap-x-3 lg:mt-7 lg:gap-x-5">
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
   
    </div>
  );
}
