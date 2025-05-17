import React from "react";
import AWS from "../assets/aws-color.png";
import MongoDB from "../assets/monog-removebg-preview.png";
import NodeJS from "../assets/node-removebg-preview.png";
import Microservices from "../assets/micro-removebg-preview.png";

const Learning = () => {
  return (
    <div className="skills container mx-auto px-4 py-8">
      {/* Flex column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 flex-wrap">
        <img
          src={AWS}
          alt="AWS"
          className="w-32 h-32 object-contain transition-transform hover:scale-105"
        />
        <img
          src={MongoDB}
          alt="MongoDB"
          className="w-32 h-32 object-contain transition-transform hover:scale-105"
        />
        <img
          src={NodeJS}
          alt="NodeJS"
          className="w-32 h-32 object-contain transition-transform hover:scale-105"
        />
        <img
          src={Microservices}
          alt="Microservices"
          className="w-32 h-32 object-contain transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Learning;
