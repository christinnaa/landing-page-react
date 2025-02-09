import HeroImage from "../assets/hero-img.webp";
import LogoOne from "../assets/logo-1.png";
import LogoTwo from "../assets/logo-2.png";
import LogoThree from "../assets/logo-3.png";
import LogoFour from "../assets/logo-4.png";
import LogoFive from "../assets/logo-5.png";
import LogoSix from "../assets/logo-6.png";
import Button from "./ButtonComponent";
import Toggle from "./Toggle";

function HeroSection() {
  const logos = [
    { src: LogoOne, width: 80, height: 31 },
    { src: LogoTwo, width: 62, height: 62 },
    { src: LogoThree, width: 80, height: 32 },
    { src: LogoFour, width: 80, height: 61 },
    { src: LogoFive, width: 106, height: 46 },
    { src: LogoSix, width: 106, height: 29 },
  ];

  return (
    <div className="dark:bg-secondaryColor">
      <div
        className="relative h-[688px]"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "right 52%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-transparent dark:bg-secondaryColor/70"></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#2A3744",
            mixBlendMode: "hard-light",
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute top-2 right-4 z-20">
          <Toggle />
        </div>
        <div className="absolute inset-0 text-white z-10 grid grid-cols-span-1 lg:grid-cols-5">
          <div className="flex flex-col justify-center items-center col-span-3">
            <div className="w-10/12 lg:w-[670px] text-center lg:text-left">
              <h2 className="text-base">Administration List</h2>
              <h1 className="text-[45px] leading-tight lg:ml-8 mt-2 lg:mt-6">
                Download our Ultimate Guide on how to Capitalise on Distressed
                Business Opportunities
              </h1>
              <p className="mt-5 lg:ml-8">
                Stay ten steps ahead of your competition.
              </p>
              <div className="mt-11 lg:ml-8">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 mt-9 px-6 lg:px-24 gap-y-8 lg:gap-y-0">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={`logo-${index + 1}`}
              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-16 px-4 lg:px-20 pb-24">
        <div className="dark:bg-tertiaryColor dark:text-white bg-[#F5F5F5] flex flex-col justify-center items-center h-fit px-2 py-16 lg:py-0 lg:h-[650px]">
          <h2 className="dark:text-white font-bold text-2xl lg:text-4xl text-center">
            Leverage Distressed Acquisitions <br />
            for Maximum Profitability
          </h2>
          <div className="w-11/12 lg:w-[624px] text-center mt-6">
            <p className="dark:text-white text-[18px] text-[#181818] font-extralight">
              Administration List is a service for savvy investors and business
              leaders seeking valuable insights into the UK insolvency sector.
              Welcome to a world of exclusive information and trends in
              distressed acquisition activity.
            </p>
            <p className="dark:text-white text-[18px] text-[#181818] font-extralight mt-4">
              Identify the right opportunities, negotiate the best deals, and
              maximise returns with distressed business acquisitions. Our
              Ultimate Guide can help you stay ten steps ahead of your
              competition.
            </p>
          </div>
          <div className="mt-14">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
