import { motion } from "framer-motion";
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

      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="relative w-10/12 lg:w-[480px]">
          <motion.h2
            className="text-4xl lg:text-6xl z-50 text-white leading-snug"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Making a profit with a distressed acquisition...
          </motion.h2>

          <motion.div
            className="absolute top-0 -left-5"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img src={Stroke} alt="" />
          </motion.div>

          <motion.p
            className="mt-4 text-white font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            Starts with clarifying your commercial purpose. Successful investors
            and entrepreneurs focus their time and attention on understanding,
            strategising, and defining exactly what they want from the
            purchase.”
          </motion.p>

          <motion.div
            className="text-white mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
          >
            <p>STEPHEN IDEH</p>
            <p>Director, Administration List</p>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <Button />
          </motion.div>

          <div className="lg:hidden grid grid-cols-2 mt-12 gap-x-4">
            {["40 years of experience", "10 steps ahead of the market"].map(
              (text, index) => (
                <motion.div
                  key={index}
                  className="rounded-[36px] border-2 border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 * index }}
                  viewport={{ once: false }}
                >
                  <h4 className="text-xl lg:text-[50px] leading-tight text-white text-center">
                    {text}
                  </h4>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:flex flex-col justify-center items-center gap-y-6 lg:gap-y-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        {["40 years of experience", "10 steps ahead of the market"].map(
          (text, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-white px-6 w-fit py-7 lg:py-14 bg-[#f5f5f5]/10 backdrop-blur-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: false }}
            >
              <div className="w-[300px] lg:w-[370px]">
                <h4 className="text-2xl lg:text-[50px] leading-tight text-white text-center">
                  {text}
                </h4>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default InformationSection;
