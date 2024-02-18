const About = () => {
  return (
    <>
      <div className="flex sm:flex-row justify-between items-center flex-col text-center sm:text-left">
        <div className="space-y-2 pb-4 max-sm:order-1">
          <p className="text-2xl font-semibold">Hello,</p>
          <p className="text-4xl font-bold">
            I'm <span className="text-cyan-400">Harsh Soni</span>
          </p>
          <p className="text-xl font-semibold">A Full Stack Developer</p>
          <div className="space-x-4 pt-2 pb-4 text-2xl">
            <a href="https://x.com/harshsoni_harsh">
                <i className="text-cyan-400 fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/harsh-soni-/">
                <i className="text-cyan-400 fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/harshsoni-harsh">
                <i className="text-cyan-400 fa-brands fa-github"></i>
            </a>
          </div>
          <button className="bg-cyan-400 text-black text-md px-3 py-1 rounded-3xl">
            <a href="https://drive.google.com/file/d/1MLPDt-unn5TKYaM5tAAZ68bsZaHqJ4BO/view?usp=sharing">
              Download Resume
            </a>
          </button>
        </div>
        <div className="max-sm:pb-4 w-full sm:w-fit flex justify-center">
          <img className="w-40 border-cyan-400 border-2 rounded-3xl h-40 shadow-lg" src={"/images/harsh-headshot.jpeg"} />
        </div>
      </div>
    </>
  );
};

export default About;
