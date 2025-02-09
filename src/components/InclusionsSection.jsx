import BackgroundImage from "../assets/inclusions-img.webp";
import Button from "./button";

function InclusionsSection() {
  return (
    <div
      className="relative flex justify-center lg:justify-end" // Use flex to align content to the right
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "830px",
      }}
    >
      <div
        className="lg:hidden absolute inset-0"
        style={{
          backgroundColor: "#2A3744",
          mixBlendMode: "hard-light",
          opacity: 0.2,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center w-10/12 lg:w-1/2 text-white lg:text-black">
        <div className="relative w-full lg:w-[500px]">
          <h2 className="text-4xl z-50 leading-snug font-bold">
            What&apos;s Included
          </h2>
          <div className="w-full lg:w-[460px]">
            <p className="mt-8 font-normal">
              Unlock the secrets to profitable distressed acquisitions today!
              Gain invaluable knowledge about market trends and industry
              insights with our Ultimate Guide. Here&apos;s a brief outline of
              what it covers:
            </p>
            <ul className="list-disc pl-10 mt-6 space-y-5">
              <li>
                The strategy of buying an operational business below market
                value
              </li>
              <li>
                Engaging the value of business assets before acquisitions{" "}
              </li>
              <li>Where and how to buy insolvent businesses </li>
              <li>
                Putting together a bulletproof strategy for maximised return on
                investment
              </li>
            </ul>
          </div>
          <div className="mt-14 flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InclusionsSection;
