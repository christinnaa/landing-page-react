import BackgroundImage from "../assets/info-img.webp";
import Stroke from "../assets/stroke.png";
import Button from "./ButtonComponent";
function InformationSection() {
  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-2"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "830px",
      }}
    >
      <div className="absolute inset-0 bg-transparent dark:bg-secondaryColor/60"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#2A3744",
          mixBlendMode: "hard-light",
          opacity: 0.7,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-10/12 lg:w-[480px]">
          <h2 className="text-4xl lg:text-6xl z-50 text-white leading-snug">
            Making a profit with a distressed acquisition...
          </h2>
          <div className="absolute top-0 -left-5">
            <img src={Stroke} alt="" />
          </div>
          <p className="mt-4 text-white font-normal">
            starts with clarifying your commercial purpose. Successful investors
            and entrepreneurs focus their time and attention on understanding,
            strategising and defining exactly what they want from the purchase.”
          </p>
          <div className="text-white mt-8">
            <p>STEPHEN IDEH</p>
            <p>Director, Administration List</p>
          </div>
          <div className="mt-12 flex justify-center lg:justify-start">
            <Button />
          </div>

          <div className="lg:hidden grid grid-cols-2 mt-12 gap-x-4">
            <div className="rounded-[36px] border-2 border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20">
              <div className="">
                <h4 className="text-xl lg:text-[50px] leading-tight text-white text-center">
                  40 years of experience
                </h4>
              </div>
            </div>
            <div className="rounded-[36px] border-2 border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20">
              <div>
                <h4 className="text-xl lg:text-[50px] leading-tight text-white text-center">
                  10 steps ahead of the market
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center gap-y-6 lg:gap-y-4">
        <div className="rounded-3xl border border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20">
          <div className="w-[300px] lg:w-[370px]">
            <h4 className="text-2xl lg:text-[50px] leading-tight text-white text-center">
              40 years of experience
            </h4>
          </div>
        </div>
        <div className="rounded-3xl border border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20">
          <div className="w-[300px] lg:w-[370px]">
            <h4 className="text-2xl lg:text-[50px] leading-tight text-white text-center">
              10 steps ahead of the market
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
