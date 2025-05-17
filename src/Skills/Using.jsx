import React from "react";
import Java from "../assets/java.png";
import Springboot from "../assets/springboot.png";
import Reactlogo from "../assets/react.js.png";
import Javascript from "../assets/js.png";
import Firebase from "../assets/firebase.png";

const Using = () => {
  return (
    <div className="skills container mx-auto px-4 py-8">
      {/* Flex column on mobile, row with wrap on desktop */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 flex-wrap">
        <img
          src={Java}
          alt="Java"
          className="w-28 h-28 object-contain transition-transform hover:scale-105"
        />
        <img
          src={Springboot}
          alt="Spring Boot"
          className="w-28 h-28 object-contain transition-transform hover:scale-105"
        />
        <img
          src={Reactlogo}
          alt="React"
          className="w-28 h-28 object-contain transition-transform hover:scale-105"
        />
        <img
          src={Javascript}
          alt="JavaScript"
          className="w-28 h-28 object-contain transition-transform hover:scale-105"
        />
        <img
          src={Firebase}
          alt="Firebase"
          className="w-28 h-28 object-contain transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Using;
