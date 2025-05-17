import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons
import Logo from "../assets/DHARUNKUMAR-modified.png";
import DeskBg from "../assets/final-dsk-bg.png";
import MobBg from "../assets/lake-in-the-mountains-at-dusk.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="bg-black flex items-center justify-between p-6 relative z-10">
        {/* Logo */}
        <img src={Logo} className="w-12 h-12" alt="dharunkumar" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li>
            <a
              href="https://drive.google.com/file/d/13qdTVWrf2cJedRiQbRFuX2n0OEtoWhjb/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-20 right-6 bg-black text-white flex flex-col gap-4 p-6 rounded-lg shadow-lg md:hidden z-20">
            <li>
              <a
                href="https://drive.google.com/file/d/13qdTVWrf2cJedRiQbRFuX2n0OEtoWhjb/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
      {/* Desktop background */}
      <div className="hidden md:block relative w-full h-[85vh] overflow-hidden">
        <img
          src={DeskBg}
          alt="desktop background"
          className="w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-9 text-white space-y-5">
          <p className="text-[50px] font-bold tracking-wide font-afacad">
            Hi!!! My Name is
          </p>
          <p className="text-[80px] font-bold tracking-wider font-afacad">
            DHARUNKUMAR
          </p>
          <TypeAnimation
            sequence={[
              "I am a Software Engineer.💻",
              1000,
              "",
              500,
              "I Love building Apps.💖",
              1000,
              "",
              500,
              "Let's Build something cool.😎",
              1000,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            className="text-[30px] font-tagesschrift tracking-widest"
            repeat={Infinity}
          />
        </div>
      </div>

      {/* Mobile Background with text overlay */}
      <div className="w-full md:hidden relative h-[calc(100vh-80px)]">
        <img
          src={MobBg}
          alt="mobile background"
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 top-16 flex flex-col space-y-0 items-center justify-start text-white">
          <p className="text-[20px] font-bold tracking-wide font-afacad">
            My name is
          </p>
          <p className="text-[42px] font-bold tracking-wider font-afacad">
            DHARUNKUMAR
          </p>
          <p className="text-lg font-tagesschrift tracking-widest ">
            I am a Software Engineer
          </p>
        </div>

        <div className="socials absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-5 items-center">
          <a
            href="https://github.com/dharun-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
          <a
            href="https://wa.me/919600621077"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/dharun08kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
