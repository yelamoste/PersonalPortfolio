import Home from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./containers/Projects";
import ContactMe from "./containers/ContactMe";
import About from "./containers/About";

function App() {
const name = "</yelamoste>";

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-950 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/projects" element={<Projects name={name}/>} />
          <Route path="/about" element={<About name={name}/>} />
          <Route path="/contact-me" element={<ContactMe name={name}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
