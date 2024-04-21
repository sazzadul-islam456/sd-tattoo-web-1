import React from "react";
// import about data
import { aboutData } from "../data";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "../variants";

const About = () => {
  //destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")} // Corrected spelling of "right"
            className="flex flex-col lg:flex-row flex-1"
            initial="hidden" // Define initial animation state
            animate="show" // Define animation state when component is mounted
          >
            <div
              className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent"
            >
              01
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")} // Corrected spelling of "left"
            className="flex-1 h-full xl:mt-48"
            initial="hidden" // Define initial animation state
            animate="show" // Define animation state when component is mounted
          >
            <h2>{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                <button className="btn btn-lg btn-link">
                  {btnText} <div className="text-xl">{btnIcon}</div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
