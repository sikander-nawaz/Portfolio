import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] sm:hidden">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          HTML
        </motion.div>

        <Skill name={"CCS"} x={"25vw"} y={"-20vw"} />
        <Skill name={"SAAS/SCCS"} x={"-25vw"} y={"-20vw"} />
        <Skill name={"Bootstrap CSS"} x={"-28vw"} y={"18vw"} />
        <Skill name={"Tailwind CSS"} x={"28vw"} y={"18vw"} />
        <Skill name={"Javascript"} x={"-0vw"} y={"-20vw"} />
        <Skill name={"ReactNative"} x={"-36vw"} y={"-1vw"} />
        <Skill name={"ReactJS"} x={"36vw"} y={"0vw"} />
        <Skill name={"NextJS"} x={"0vw"} y={"20vw"} />
        <Skill name={"ExpressJS"} x={"16vw"} y={"-13vw"} />
        <Skill name={"NodeJS"} x={"-21vw"} y={"-11vw"} />
        <Skill name={"MongoDB"} x={"-25vw"} y={"8vw"} />
        <Skill name={"Firebase"} x={"21vw"} y={"11vw"} />
        <Skill name={"Python"} x={"0vw"} y={"-12vw"} />
        <Skill name={"Java"} x={"0vw"} y={"12vw"} />
      </div>
    </>
  );
};

export default Skills;
