import ImgImam from "../assets/imam.png";
import ImgTail from "../assets/skills/Tailwind.svg";
import ImgReact from "../assets/skills/React.svg";
import Imgjavascript from "../assets/skills/js1.svg";
import Imghtml from "../assets/skills/HTML.svg";
import ImgCss from "../assets/skills/CSS.svg";
import Imgfigma from "../assets/skills/Figma.svg";

const About = () => {
  return (
    <div className="relative flex flex-col min-h-max w-full items-center lg:items-start lg:bg-white text-white rounded-3xl lg:flex-row lg:justify-center">
      <div
        className="relative min-h-screen h-[120vh] lg:h-[110vh] w-full lg:w-8/12 bg-cover bg-no-repeat bg-center"
        id="about"
        style={{ backgroundImage: `url(${ImgImam})` }}
      >
        <div className="bg-black w-full h-full gap-y-5 absolute opacity-75 text-center flex flex-col items-center justify-start p-6 pt-14 text-white z-[0]">
          <div className="w-max">
            <h1 className="font-extrabold text-[36px] lg:text-[48px] xl:text-[62px] lg:pt-4">
              About Me
            </h1>
            <hr />
          </div>
          <div>
            <h2 className="text-[24px] lg:text-[32px] xl:text-[41px] font-semibold">
              I’m a Web Developer
            </h2>
            <p className="text-[20px] sm:text-[26px] lg:text-[24px] md:leading-relaxed xl:text-[26px] xl:tracking-wide xl:leading-loose xl:mt-5">
              I'm Imam Sandy Bachtiar, a passionate 11th-grade student at SMA
              Plus Abu Dzar. I love exploring technology through my laptop, and
              I'm currently learning HTML, CSS, JavaScript, and game development
              with GDevelop.{" "}
              <span className="hidden sm:block">
                My dream is to become either a skilled programmer or a
                doctor—someone who builds and heals. Outside of tech, I enjoy
                swimming, archery, futsal, and practicing public speaking.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* my skills */}
      <div className="w-[90vw] min-h-[50vh] rounded-2xl bg-gray-800 lg:bg-white lg:rounded-none lg:h-[100vh] absolute bottom-[80px] z-[2] flex flex-col lg:pt-14 p-6 gap-y-6 items-center lg:static">
        <div className="w-max">
          <h2 className="text-center text-[24px]  lg:font-extrabold lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-primary lg:to-[#38BDF8] lg:text-[48px] xl:text-[62px] py-4">
            My Skills
          </h2>
          <hr className="-mt-4 border bg-clip-border bg-gradient-to-r from-primary to-[#38BDF8]" />
        </div>
        {/* icon skills */}
        <div className="w-full lg:mt-5 grid  grid-cols-3 lg:grid-cols-2 gap-y-5 lg:gap-y-[100px] justify-items-center items-center">
          <img src={Imghtml} alt="" className="min-w-[85px] xl:min-w-[123px]" />
          <img src={ImgCss} alt="" className="min-w-[85px] xl:min-w-[123px]" />
          <img
            src={Imgjavascript}
            alt=""
            className="min-w-[85px] xl:min-w-[123px]"
          />
          <img src={ImgTail} alt="" className="min-w-[85px] xl:min-w-[123px]" />
          <img
            src={ImgReact}
            alt=""
            className="min-w-[85px] xl:min-w-[123px]"
          />
          <img
            src={Imgfigma}
            alt=""
            className="min-w-[85px] xl:min-w-[123px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
