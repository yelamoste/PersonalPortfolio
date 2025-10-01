import ExpandableContainer from "../components/ExpandableContainer";
import Navbar from "./Navbar";

const Projects = ({ name }) => {



  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar name={name} projects={`text-teal-300`} />
      <ExpandableContainer projectCategoryName="Academic Projects" btnColor="amber" initialState="45%" />

      <ExpandableContainer projectCategoryName="Personal Projects" btnColor="purple" initialState="max" />


    </div>
  );
};

export default Projects;
