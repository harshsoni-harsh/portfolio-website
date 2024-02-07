import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const ProjectsList = [
  {
    title: "Image Matching game",
    imgSrc: "/images/match-game-output.png",
    repoLink: "https://github.com/harshsoni-harsh/match-game",
    liveLink: "https://match-game-omega.vercel.app/",
  },
  {
    title: "App store",
    imgSrc: `/images/app-store-output.png`,
    repoLink: "https://app-store-sage.vercel.app/",
    liveLink: "https://github.com/harshsoni-harsh/app-store",
  },
  {
    title: "Password Manager",
    imgSrc: "/images/password-manager-output.png",
    repoLink: "https://password-manager-pi-ebon.vercel.app/",
    liveLink: "https://github.com/harshsoni-harsh/password-manager",
  },
  {
    title: "Appointment App",
    imgSrc: "/images/appointments-app-output.png",
    repoLink: "https://github.com/harshsoni-harsh/appointment-app",
    liveLink: "https://appointment-app-kohl.vercel.app/",
  },
  {
    title: "Coin Toss Game",
    imgSrc: "/images/coin-toss-game-output.png",
    repoLink: "https://github.com/harshsoni-harsh/coin-toss-game",
    liveLink: "https://coin-toss-game-rho.vercel.app/",
  },
  {
    title: "Comment App",
    imgSrc: "/images/comments-app-output.png",
    repoLink: "https://github.com/harshsoni-harsh/comment-app",
    liveLink: "https://comments-app-lilac.vercel.app/",
  },
  {
    title: "Digital Timer App",
    imgSrc: "/images/digital-timer-output.png",
    repoLink: "https://github.com/harshsoni-harsh/digital-timer-app",
    liveLink: "https://digital-timer-app-one.vercel.app/",
  },
  {
    title: "Emoji game",
    imgSrc: "/images/emoji-game-output.png",
    repoLink: "https://github.com/harshsoni-harsh/emoji-game",
    liveLink: "https://emoji-game-psi.vercel.app/",
  },
  {
    title: "Money Manager",
    imgSrc: "/images/money-manager-output.png",
    repoLink: "https://github.com/harshsoni-harsh/money-manager",
    liveLink: "https://money-manager-snowy.vercel.app/",
  },
  {
    title: "Twitter API Clone",
    imgSrc: "",
    repoLink: "https://github.com/harshsoni-harsh/twitter-api-clone/",
    liveLink: "",
  },
  {
    title: "Todo Application API",
    imgSrc: "",
    repoLink: "https://github.com/harshsoni-harsh/todo-application-api/",
    liveLink: "",
  },
  {
    title: "Covid-19 India Portal API",
    imgSrc: "",
    repoLink: "https://github.com/harshsoni-harsh/covid-19-india-portal-api/",
    liveLink: "",
  },
  {
    title: "Player Match Score API",
    imgSrc: "",
    repoLink: "https://github.com/harshsoni-harsh/player-match-score-api/",
    liveLink: "",
  },
  {
    title: "Sample Popular Blog Page",
    imgSrc: "/images/popular-blog-output.png",
    repoLink: "https://github.com/harshsoni-harsh/sample-popular-blog-page",
    liveLink: "https://sample-popular-blog-page.vercel.app/",
  },
];

function App() {
  const [id, setId] = useState("Home");
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-b to-cyan-300 from-gray-950">
      <div className="pb-8 h-fit max-w-screen-xl space-y-12 flex flex-col max-sm:px-8 sm:px-16 py-5 text-white bg-gray-800 shadow-2xl rounded-3xl grow shadow-slate-950">
        <Navbar id={id} setId={setId} />
        {id === "Home" ? (
          <>
            <About /> <Skills />
            <Projects projectList={ProjectsList} />
          </>
        ) : (
          ""
        )}
        {id === "About" ? <About /> : ""}
        {id === "Skills" ? <Skills /> : ""}
        {id === "Projects" ? <Projects projectList={ProjectsList} /> : ""}
      </div>
    </div>
  );
}

export default App;
