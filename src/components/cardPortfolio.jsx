import IC from "../assets/portfolio-icons/IC.svg";
import IS from "../assets/portfolio-icons/isandtier.svg";
import ITS from "../assets/portfolio-icons/itsmamsb.svg";
import TAPAS from "../assets/portfolio-icons/tapas.svg";
import YD from "../assets/portfolio-icons/yourlidz.svg";
import YL from "../assets/portfolio-icons/yourlink.svg";
import Button from "./button";

export default function CardPortfolio() {
  const skills = [
    {
      name: "YourLink",
      description:
        "Yourlink is a simple site to save and share favorite links. Built with React and Tailwind, it features a clean and responsive design. Add your favorite links and view your saved list.",
      tools: ["figma", "HTML", "tailwind","JS"],
      linkImage: YL,
      btnHref: "https://yourlink.vercel.app/",
    },
    {
      name: "ISandTier",
      description:
        "Isandtier is a website built from slicing a Figma design. Created to practice frontend skills and translate UI concepts into real code.",
      tools: ["figma", "HTML", "tailwind"],
      linkImage: IS,
      btnHref: "https://first-tailwind-project-psi.vercel.app/",
    },
    {
      name: "TAPAS",
      description:
        "Tapas is a green transport campaign website. It offers access to rentable e-bikes to reduce pollution and traffic in Indonesian cities",
      tools: ["figma", "HTML", "tailwind", "JS"],
      linkImage: TAPAS,
      btnHref: "https://tapasride.vercel.app/",
    },
    {
      name: "YourLidz",
      description:
        "Yourlidz is a simple site for jotting down ideas, tasks, or daily notes. Designed with a minimalist layout and easy input focus.",
      tools: ["figma", "JS", "tailwind"],
      linkImage: YD,
      btnHref: "https://yourlidz.vercel.app/",
    },
    {
      name: "Itsmamsb",
      description:
        "Itsmamsb is my first portfolio website showcasing my profile, CV, and digital projects. Built with responsive design and clean navigation.",
      tools: ["HTML", "SCSS", "AOS"],
      linkImage: ITS,
      btnHref: "https://itsmamsb.vercel.app/",
    },
    {
      name: "ICounter",
      description:
        "iCounter is a simple exam project—a counter app built to test basic React skills and user interaction.",
      tools: ["HTML", "tailwind"],
      linkImage: IC,
      btnHref: "https://icounter.vercel.app/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:mt-9 lg:mb-9 items-center lg:gap-x-8 justify-center gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          data-aos="fade-right"
          data-aos-duration="1000"
          className=" h-[400px] w-[100%] sm:w-[400px]   rounded-lg shadow-md flex flex-col items-center justify-start"
        >
          <div className="w-full h-[200px] rounded-t-lg flex items-center justify-center bg-gray-300">
            <img
            src={skill.linkImage}
            loading="lazy"
            alt=""
            className="w-[100px] "
          />
          </div>
          <div className="text-left -mt-2 bg-white w-full h-[400px] max-h-max p-2 pb-6 px-5 rounded-md flex flex-col items-start gap-y-2">
            <h1 className="text-[24px] font-semibold">{skill.name}</h1>
            <p className="text-[16px]">{skill.description}</p>
            {/* tools */}
            <div className="flex gap-x-2 mt-3">
              {skill.tools.map((tool, i) => (
                <p
                  key={i}
                  className="text-[14px] text-[#8FB0F6] bg-[#DBE5F6] px-5 rounded-full"
                >
                  {tool}
                </p>
              ))}
            </div>
            {/* link */}
            <Button
              title={"Visit Website"}
              href={skill.btnHref}
              target={"_blank"}
              className={"justify-self-end mt-4"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
