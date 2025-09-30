import React from "react";
import Navbar from "./Navbar";

const Projects = ({name}) => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar name={name} projects={`text-teal-300`}/>
      
    </div>
  );
};

export default Projects;
