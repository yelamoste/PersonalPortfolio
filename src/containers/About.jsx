
import React from "react";
import Navbar from "./Navbar";

const About = ({name}) => {
  return (
    <div>
      <Navbar name={name} about={`text-teal-300`}/>
      About
    </div>
  );
};

export default About;
