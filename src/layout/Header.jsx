import Navbar from "../components/Navbar";
import Logo from "../components/logo";

export default function Header() {
const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-opacity-50");
    } else {
      header.classList.remove("bg-opacity-50");
    }
  });

  return (
    <div id="header" className=" shadow-md  flex justify-between items-center p-4 px-8  bg-[#F1F5F9] fixed z-10 top-0 w-full">
      <Logo />
      <Navbar />
    </div>
  );
}
