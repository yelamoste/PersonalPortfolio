import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({name, projects, about, contact}) => {
  return (
    <div className="bg-gray-900 h-[5vh] w-[100vw] items-center flex flex-row p-1">
      <div className="w-[20%] justify-center h-[100%] flex text-gray-50 text-lg font-bebas font-normal">
        <Link to="/">{name}</Link>
      </div>
      <div className="flex flex-row justify-evenly items-center w-[80%] h-[100%] text-gray-400 text-xs">
        <div className="w-[50%]"></div>
        
        <div className={`hover:text-teal-300 ${projects}`}>
          <Link to="/projects">projects</Link>
        </div>
        <div className={`hover:text-teal-300 ${about}`}>
          <Link to="/about">about</Link>
        </div>
        <div className={`hover:text-teal-300 ${contact}`}>
          <Link to="/contact-me">contact me</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
