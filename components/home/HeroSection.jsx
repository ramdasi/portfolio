import React from "react";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen snap-start text-center px-4">
      <div></div>
      <div className="text-7xl font-bold">
        Hello
        <br />
        {`I'm Ishwar`}
      </div>
      <p className="text-lg mt-4 max-w-2xl">
        {`I'm an innovative Full Stack Developer with expertise in the MERN stack, AWS, CI/CD pipelines, and microservices architecture.
        I love building scalable solutions and have worked on various impactful projects.`}
      </p>
      <div className="mt-8">
        <Link href="/#about">
          <FaAnglesDown className="animate-ping"/>
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HeroSection;
