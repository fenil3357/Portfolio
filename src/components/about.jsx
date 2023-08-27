import { motion } from "framer-motion";
const textAnimate = {
  offscreen: { x: 50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const textUpAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container mt-2"
    >
      <div className=" flex flex-row max-w-[900px] mx-auto tablet:block mobile:block mobile:px-3">
        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className="flex-grow my-auto text-right uppercase px-6 tablet:text-center mobile:text-center"
        >
          <h1 className="font-poppins text-3xl font-bold">About</h1>
          <p className="text-gray-500">ME</p>
          <div className="h-52 tablet:h-8 mobile:h-8"></div>
        </motion.div>

        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className=" font-proxima text-[17px] w-[65%] px-6 py-2 tablet:w-full mobile:w-full mobile:px-2 text-gray-500"
        >
          <motion.p variants={textUpAnimate}>
            Hello! My name is <b>Fenil Rami</b>, I have been interested in web
            development for many years and have been actively working on
            building web applications for the past two years.I am also into Data
            structures and Algorithms and problem solving. I am constantly
            seeking out new technologies and techniques to enhance my skills and
            stay up-to-date in this field.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
