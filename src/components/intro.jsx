import React from "react";

function Intro() {
  return (
    <div
      className="w-[60%] flex flex-col justify-between h-screen max-h-[808px]
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

      {/* <div className="flex flex-row justify-around">
        <div className="flex flex-col h-96 justify-center items-start ">
          <p className="text-xl text-left pb-4">HELLO👋, I AM</p>
          <p className="text-5xl font-bold text-left pb-4">FENIL RAMI</p>
          <p className="text-lg whitespace-pre-wrap font-light text-gray-600">
            A MERN stack developer, Building Seamless web applications.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-96 w-96">
          
        </div> */}
      {/* </div> */}

    </div>
  );
}

export default Intro;
