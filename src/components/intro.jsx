import React from "react";
import { motion } from "framer-motion";
import Icon from "./icon";

function Intro() {
  const textAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  return (
    <div
      className="w-[60%] flex flex-col h-screen max-h-[808px]
          tablet:w-full tablet:max-w-[500px] tablet:m-auto
          mobile:w-full"
    >
      <div className="py-4">
        <ul className="flex flex-row justify-between px-14 tablet:px-8 mobile:px-4 text-gray-500">
          <li
            className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px] text-[16px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
          >
            <a href="#home">HOME</a>
          </li>

          <li
            className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px] text-[16px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
          >
            <a href="#about">ABOUT</a>
          </li>

          <li
            className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px] text-[16px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
          >
            <a href="#skills">SKILLS</a>
          </li>

          <li
            className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px] text-[16px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
          >
            <a href="#projects">PROJECTS</a>
          </li>
        </ul>
      </div>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="px-16 tablet:px-10 mobile:px-8 py-48"
      >
        <motion.p
          variants={textAnimate}
          className="font-proxima text-xl whitespace-nowrap leading-10 mobile:text-[22px] mobile:py-2 "
        >
          HELLO👋, I AM
        </motion.p>
        <h1 className=" font-bold whitespace-nowrap font-poppins text-5xl leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
          FENIL RAMI
        </h1>
        <p className=" text-[18px] max-w-[600px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
          A MERN stack developer, Building Seamless web applications.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
        viewport={{ once: false, amount: 0.6 }}
        className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8"
      >
        <Icon
          i={1}
          url="https://github.com/fenil3357"
          name="Github"
          logo="Github"
        />
        <Icon
          i={2}
          url="https://twitter.com/fenil3357"
          logo="Twitter"
          name="Twitter"
        />
        <Icon
          i={3}
          url="https://www.linkedin.com/in/fenil-rami-6a7803204/"
          logo="Linkedin"
          name="Linkedin"
        />

        <Icon
          i={5}
          url="https://instagram.com/fenil3357"
          name="Instagram"
          logo="Instagram"
        />
        <Icon
          i={6}
          url="mailto:fenil3357@gmail.com"
          logo="Email"
          name="Email"
        />
      </motion.div>
      <div className="w-[45%] h-screen max-h-[808px] tablet:hidden mobile:hidden">
        
      </div>
    </div>
  );
}

export default Intro;
