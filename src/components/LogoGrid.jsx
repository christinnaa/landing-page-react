import LogoOne from "../assets/logo-1.png";
import LogoTwo from "../assets/logo-2.png";
import LogoThree from "../assets/logo-3.png";
import LogoFour from "../assets/logo-4.png";
import LogoFive from "../assets/logo-5.png";
import LogoSix from "../assets/logo-6.png";

function LogoGrid() {
      const logos = [
        { src: LogoOne, width: 80, height: 31 },
        { src: LogoTwo, width: 62, height: 62 },
        { src: LogoThree, width: 80, height: 32 },
        { src: LogoFour, width: 80, height: 61 },
        { src: LogoFive, width: 106, height: 46 },
        { src: LogoSix, width: 106, height: 29 },
      ];
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 mt-9 px-6 lg:px-24 gap-y-8 lg:gap-y-0">
      {logos.map((logo, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={logo.src}
            alt={`logo-${index + 1}`}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
}

export default LogoGrid