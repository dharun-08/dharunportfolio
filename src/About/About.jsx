import React from 'react'

const About = () => {
  return (
    <div>
      <div className="justify-center items-center flex relative">
        <button className="absolute bottom-9 border-x-2 border-y-2 p-2 text-white font-mono tracking-widest md:bg-transparent md:backdrop-blur-lg hover:bg-slate-400 hover:font-bold">
          <a href="#about-me">About Me</a>
        </button>
      </div>
      <div
        id="about-me"
        className="about-me w-full h-screen bg-black flex flex-row justify-center items-center"
      >
        <div className="container border text-white border-x-white p-6 space-y-2 text-center m-2 md:flex-row">
          <p className="text-sm md:text-[20px]">🚀**Passionate Software Developer**🚀</p>
          <p className='md:text-[20px]'>
            Crafting clean code & innovative solutions that power the future 🌟
          </p>
          <p className='md:text-[20px]'>
            Experienced in full-stack development, always learning new tech to
            create scalable, efficient, and user-friendly apps.
          </p>
          <p className='md:text-[20px]'>
            💻 From problem-solving to building intuitive interfaces, I thrive
            in fast-paced environments, driving projects from concept to launch!
          </p>
          <p className="text-sm md:text-[20px]">Let's build something awesome together!💡</p>
        </div>
      </div>
    </div>
  );
}

export default About