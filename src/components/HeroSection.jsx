import { motion } from "framer-motion";
import { useRef } from "react";
import HeroImage from "../assets/hero-img1.webp";
import Button from "./ButtonComponent";
import LogoGrid from "./LogoGrid";
import Toggle from "./Toggle";

function HeroSection() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="dark:bg-secondaryColor">
      <div
        className="relative h-[688px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "right 52%",
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
        <div className="absolute top-3 right-5 z-20">
          <Toggle />
        </div>
        <div className="absolute inset-0 text-white z-10 grid grid-cols-span-1 lg:grid-cols-5">
          <div className="flex flex-col justify-center items-center col-span-3">
            <div className="w-10/12 lg:w-[670px] text-center lg:text-left">
              <motion.h2
                className="text-2xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                Administration List
              </motion.h2>
              <motion.h1
                className="text-[45px] leading-tight lg:ml-10 mt-2 lg:mt-6"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                Download our Ultimate Guide on how to Capitalise on Distressed
                Business Opportunities
              </motion.h1>

              <motion.p
                className="mt-5 lg:ml-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                Stay ten steps ahead of your competition.
              </motion.p>
              <motion.div
                className="mt-11 lg:ml-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                <Button />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <LogoGrid />
      <div className="mt-16 px-6 lg:px-20 pb-24">
        <motion.div
          className="dark:bg-tertiaryColor dark:text-white bg-[#F5F5F5] flex flex-col justify-center items-center h-fit px-2 py-16 lg:py-0 lg:h-[650px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="dark:text-white font-bold text-2xl lg:text-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            Leverage Distressed Acquisitions <br />
            for Maximum Profitability
          </motion.h2>

          <motion.div
            className="w-11/12 lg:w-[624px] text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
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
          </motion.div>
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false }}
          >
            <Button />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
