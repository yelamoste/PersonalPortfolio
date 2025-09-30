import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Home = ({ name }) => {




  // TEXT
  const briefInfo1 = "<BriefInfo details=`";
  const briefInfo2 = "`></BriefInfo>";
  const projectsSection1 = `const Projects = () => {`;
  const projectsSection2 = `return (`;
  const projectsSection3 = `<Link to="/projects1">Project 1</Link>`;
  const projectsSection4 = `<Link to="/projects2">Project 2</Link>`;
  const projectsSection5 = `<Link to="/projects3">Project 3</Link>`;
  const projectsSection6 = `);`;
  const projectsSection7 = `};`;

  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar name={name} />
      <div className=" m-[10px]  w-[calc(100% - 20px)] h-[40%] flex justify-center flex-col items-center">
        <h1 className="text-6xl text-teal-600 font-oswald uppercase">{name}</h1>
        <h4 className="text-teal-700 uppercase font-alan text-xm">Computer Engineer/Front-End Developer</h4>
      </div>
      <div className=" m-[10px] w-[calc(100% - 20px)] h-[20%] flex justify-center">
        <div className="w-[50%] h-[92%] m-[5px] text-sm">
          <code className=" text-teal-700 hover:font-medium">
            <Link to="/about"> {briefInfo1}</Link></code>
          <code className=" text-gray-400 ">
            Hi, I'm Yvonne Lamoste. An aspiring Front-End Developer.
            I created various mini projects that includes customized birthday
            website gift, static websites, and even dynamic ones using HTML, CSS, JS, MySQL, and PHP.
            I recently venture towards ReactJS, TailwindCSS, and still figuring out how to use Firebase.</code>
          <code className=" text-teal-700 hover:font-medium">{briefInfo2}</code>
        </div>
      </div>
      <div className=" h-[23%]  m-[10px]  w-[calc(100% - 20px)] text-sm flex justify-center">
        <div className="w-[50%] h-[92%] m-[5px] text-sm">
          <code className=" text-teal-700 hover:font-medium">
            <Link to="/projects"> {projectsSection1}</Link>
            <div className="ml-[20px]">{projectsSection2}</div>
          </code>
          {/* links */}
          <div className=" ml-[40px]">

          <code className=" text-gray-400">
            <div className="hover:underline">
              <Link to="/projects">{projectsSection3} </Link>
            </div>
            <div className="hover:underline">
              <Link to="/projects">{projectsSection4} </Link>
            </div>
            <div className="hover:underline">
              <Link to="/projects">{projectsSection5} </Link>
            </div>
          </code>
          </div>

          <code className=" text-teal-700 hover:font-medium">
            <div className="ml-[20px]">{projectsSection6}</div>
            <div className="">{projectsSection7}</div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Home;
