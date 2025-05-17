import React from "react";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";

const projects = [
  {
    title: "AI Smart Note",
    image: Project1,
    viewLink: "#",
    demoLink: "#",
  },
  {
    title: "Blog",
    image: Project2,
    viewLink: "https://github.com/dharun-08/blog",
    demoLink: "https://github.com/dharun-08/blog",
  },
  {
    title: "Outpatient System",
    image: Project3,
    viewLink: "https://github.com/dharun-08/outpatient-frontend",
    demoLink: "https://github.com/dharun-08/outpatient-frontend",
  },
];

const Project = () => {
  return (
    <div id="works" className="flex flex-col items-center bg-black w-full py-10">
      <hr className="border-gray-700 w-full" />
      <p className="text-center my-4 font-bold text-white tracking-widest text-2xl">
        PROJECTS
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md p-4 flex flex-col items-center text-white max-w-sm"
          >
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <div className="flex space-x-4">
              <a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition">
                  View Project
                </button>
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition">
                  Demo Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
