import IC from '../assets/portfolio-icons/IC.svg';
import IS from '../assets/portfolio-icons/isandtier.svg';
import ITS from '../assets/portfolio-icons/itsmamsb.svg';
import TAPAS from '../assets/portfolio-icons/tapas.svg';
import YD from '../assets/portfolio-icons/yourlidz.svg';
import YL from '../assets/portfolio-icons/yourlink.svg';
import Button from './button';


export default function CardPortfolio() {
  const skills = [
    { name: "YourLink", level: "Yourlink is a simple site to save and share favorite links. Built with React and Tailwind, it features a clean and responsive design. Add your favorite links and view your saved list.", linkImage: YL, btnHref: "https://yourlink.vercel.app/"  },
    { name: "ISandTier", level: "Isandtier is a website built from slicing a Figma design. Created to practice frontend skills and translate UI concepts into real code.", linkImage: IS, btnHref: "https://isandtier.vercel.app/"  },
    { name: "TAPAS", level: "Tapas is a green transport campaign website. It offers access to rentable e-bikes to reduce pollution and traffic in Indonesian cities", linkImage: TAPAS, btnHref: "https://tapasride.vercel.app/"  },
    { name: "YourLidz", level: "Yourlidz is a simple site for jotting down ideas, tasks, or daily notes. Designed with a minimalist layout and easy input focus.", linkImage: YD, btnHref: "https://yourlidz.vercel.app/"  },
    { name: "Itsmamsb", level: "Itsmamsb is my first portfolio website showcasing my profile, CV, and digital projects. Built with responsive design and clean navigation.", linkImage: ITS, btnHref: "https://itsmamsb.vercel.app/"  },
    { name: "ICounter", level: "iCounter is a simple exam project—a counter app built to test basic React skills and user interaction.", linkImage: IC, btnHref: "https://icounter.vercel.app/"  },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:mt-9 lg:mb-9 items-center lg:gap-x-8 justify-center gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className=" min-h-[300px] pt-4 min-w-[400px] max-w-[400px] bg-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center gap-y-4"
          
        >
          <img src={skill.linkImage} loading="lazy" alt="" className='w-[100px] ' />
          <div className='text-left bg-white w-full h-full min-h-[250px] max-h-[250px] p-2 rounded-md flex flex-col items-start gap-y-2'>
            <h1 className='text-[24px] font-semibold'>{skill.name}</h1>
            <p className='text-[16px]'>{skill.level}</p>
            {/* tools */}
            <div></div>
            {/* link */}
          <Button title={"Visit Website"} href={skill.btnHref} target={"_blank"} />
          </div>
        </div>
      ))}
    </div>
  );
}
