import { useState } from "react";
import photo from "./assets/harsh-headshot.jpeg";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [id, setId] = useState('Home');

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-b to-cyan-300 from-gray-950">
      <div className="pb-8 h-fit max-w-screen-xl space-y-12 flex flex-col max-sm:px-8 sm:px-16 py-5 text-white bg-gray-800 shadow-2xl rounded-3xl grow shadow-slate-950">
        <Navbar id={id} setId={setId} />
        {id === 'Home' ? <><About /> <Skills /><Projects /></> : ""}
        {id === "About" ? <About /> : ""}
        {id === "Skills" ? <Skills /> : ""}
        {id === "Projects" ? <Projects /> : ""}
      </div>
    </div>
  );
}

export default App;
