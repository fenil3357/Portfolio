import React from "react";
import ListItem from "./list-item";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      viewport={{ once: true, amount: 0.4 }}
      id="skills"
      className="py-[100px] w-screen max-w-full desktop:container"
    >
      <div className="flex flex-row mobile:flex-col justify-center max-w-[900px] mx-auto mobile:px-3">
        <div className="mx-4 mobile:mb-14 mobile:w-full mobile:mx-0 w-[150px]">
          <h1 className="uppercase text-3xl font-bold mobile:text-center">
            Skills
          </h1>
        </div>

        <div className="grid grid-cols-4 mini-laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-2 mobile:pl-8 text-[18px]">
          <div className="mr-14 mb-5">
            <h1 className="font-bold tracking-wide mb-3 uppercase text-[16px]">
              Languages
            </h1>
            <ListItem name="C" />
            <ListItem name="C++" />
            <ListItem name="Javascript" />
            <ListItem name="HTML" />
            <ListItem name="CSS" />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-bold tracking-wide mb-3 uppercase text-[16px]">
              Frameworks
            </h1>
            <ListItem name="Nodejs" />
            <ListItem name="Reactjs" />
            <ListItem name="Tailwind CSS" />
            <ListItem name="Bootstrap" />
          </div>
          <div className="mr-14 mb-5">
            <h1 className="font-bold tracking-wide mb-3 uppercase text-[16px]">
              Databases
            </h1>
            <ListItem name="MongoDB" />
            <ListItem name="MySQL" />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-bold tracking-wide mb-3 uppercase text-[16px]">
              Tools
            </h1>
            <ListItem name="Git" />
            <ListItem name="Github" />
            <ListItem name="Postman API" />
            <ListItem name="Firecamp" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
