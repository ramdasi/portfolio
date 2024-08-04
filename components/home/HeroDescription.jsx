import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

const HeroDescription = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[100vh]   snap-start ">
      <div></div>
      <div className="text-7xl font-bold">
        I'm Full Stack Developer
      </div>
      <div className=""><FaAnglesDown className="fixed bottom-5" size={30} /></div>
    </div>
  );
};

export default HeroDescription;
