import ServicesImage from "../assets/services-img.webp";
import DevicesImage from "../assets/devices-img.png";
import TimeImage from "../assets/time.png";
import DataImage from "../assets/data1.png";
import LibraryImage from "../assets/library.png";
import ContactImage from "../assets/contact.png";
function ServicesSection() {
  const services = [
    {
      src: TimeImage,
      title: "Real Time Results",
      text: "Real-time information on UK companies entering administration.",
      width: 40,
    },
    {
      src: DataImage,
      title: "Financial Data",
      text: "Company financial data, including turnover, profit and trading history.",
      width: 46,
    },
    {
      src: LibraryImage,
      title: "Information Library",
      text: "An ever expanding library of information, interviews and advice.",
      width: 36,
    },
    {
      src: ContactImage,
      title: "Direct Contact",
      text: "Direct contact details for administrators across the UK.",
      width: 38,
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${ServicesImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "830px",
      }}
    >
      <div className="flex justify-center">

      <img
        src={DevicesImage}
        alt="services"
        className="w-[400px] h-auto lg:w-[670px] lg:h-[451px]"
      />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-4 w-full px-12 lg:px-24 mt-16 lg:mt-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={service.src}
              alt={`logo-${index + 1}`}
              height={40}
              width={service.width}
            />
            <div className="w-[280px] text-center mt-4 lg:mt-8">
              <h3 className="text-primaryColor text-xl lg:text-2xl ">{service.title}</h3>
              <p className="hidden lg:block mt-2 text-white font-normal">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
