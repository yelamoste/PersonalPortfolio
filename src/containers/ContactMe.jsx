import React from "react";
import Navbar from "./Navbar";

const ContactMe = ({name}) => {
  return (
    <div>
      <Navbar name={name} contact={`text-teal-300`}/>
      ContactMe
    </div>
  );
};

export default ContactMe;
