import React, { useState } from "react";
import Using from './Using';
import Learning from './Learning';

const Skill = () => {
  const [active, setActive] = useState("using");

  const buttonBaseClass =
    "pr-5 pl-5 border rounded-lg bg-gray-500 pt-1 pb-1";

  return (
    <div id="skills" className="skills bg-black text-white h-full">
      <hr />
      <p className="text-center m-1 font-bold tracking-widest md:text-[30px]">SKILLS</p>
      <div className="m-2 flex justify-center items-center gap-x-2">
        <button
          className={`${buttonBaseClass} ${
            active === "using"
              ? "bg-gray-500"
              : "bg-transparent"
          }`}
          onClick={() => setActive("using")}
        >
          Using
        </button>
        <button
          className={`${buttonBaseClass} ${
            active === "learning"
              ? "bg-gray-500"
              : "bg-transparent"
          }`}
          onClick={() => setActive("learning")}
        >
          Learning
        </button>
      </div>
        <div>
        {
            active === "using" && <Using />
        }
        {
            active === "learning" && <Learning />
        }
        </div>
    </div>
  );
};

export default Skill;
