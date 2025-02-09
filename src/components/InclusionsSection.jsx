import { motion } from "framer-motion";
import BackgroundImage from "../assets/inclusions-img.webp";
import Button from "./ButtonComponent";

function InclusionsSection() {
  return (
    <div
      className="relative flex justify-center lg:justify-end"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "830px",
      }}
    >
      <div className="absolute inset-0 bg-transparent dark:bg-secondaryColor/50"></div>
      <div
        className="lg:hidden absolute inset-0"
        style={{
          backgroundColor: "#2A3744",
          mixBlendMode: "hard-light",
          opacity: 0.4,
        }}
      ></div>
      <motion.div
        className="flex flex-col justify-center items-center w-10/12 lg:w-1/2 text-white lg:text-black z-50 dark:text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="relative w-full lg:w-[500px]">
          <motion.h2
            className="text-4xl z-50 leading-snug font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            What&apos;s Included
          </motion.h2>

          <motion.div
            className="w-full lg:w-[460px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="mt-8 font-normal">
              Unlock the secrets to profitable distressed acquisitions today!
              Gain invaluable knowledge about market trends and industry
              insights with our Ultimate Guide. Here&apos;s a brief outline of
              what it covers:
            </p>
            <motion.ul
              className="list-disc pl-10 mt-6 space-y-5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: false }}
            >
              {[
                "The strategy of buying an operational business below market value",
                "Engaging the value of business assets before acquisitions",
                "Where and how to buy insolvent businesses",
                "Putting together a bulletproof strategy for maximised return on investment",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="mt-14 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: false }}
          >
            <Button />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default InclusionsSection;
