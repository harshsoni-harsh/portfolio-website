// import laptop from "../../assets/laptop.png";

const Skills = () => {
  return (
    <div className="space-y-2">
      <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Skills
      </p>
      <div className="flex justify-between align-middle">
        <div className="md:w-3/6 w-full flex flex-col justify-center">
          <div className="space-y-4">
            <div className="md:pr-8 text-xl flex align-middle justify-between space-x-8">
              <div className="flex space-x-3">
                <i className="text-3xl text-red-400 fa-brands fa-html5"></i>
                <span>HTML5</span>
              </div>
              <p> + 2 years</p>
            </div>
            <div className="md:pr-8 text-xl flex align-middle justify-between space-x-8">
              <div className="flex space-x-3">
                <i className="text-3xl text-blue-600 fa-brands fa-css3-alt"></i>
                <span>CSS3</span>
              </div>
              <p> + 2 years</p>
            </div>
            <div className="md:pr-8 text-xl flex align-middle justify-between space-x-8">
              <div className="flex space-x-3">
                <i className="text-3xl text-yellow-200 fa-brands fa-js"></i>
                <span>JS</span>
              </div>
              <p> + 1 year</p>
            </div>
            <div className="md:pr-8 text-xl flex align-middle justify-between space-x-8">
              <div className="flex space-x-3">
                <i className="text-3xl text-cyan-400 fa-brands fa-react"></i>
                <span>React JS</span>
              </div>
              <p> &lt; 1 year</p>
            </div>
            <div className="md:pr-8 text-xl flex align-middle justify-between space-x-8">
              <div className="flex space-x-3">
                <i className="text-3xl text-green-300 fa-brands fa-node-js"></i>
                <span>Node JS</span>
              </div>
              <p> &lt; 1 year</p>
            </div>
          </div>
        </div>
        <div className="max-md:hidden w-3/6 flex flex-col justify-center">
          <img src="/images/laptop.png" alt="laptop image" />
        </div>
      </div>
      <p className="max-lg:pt-4 text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Other Skills
      </p>
      <div className="space-x-4 flex justify-center pt-4 pb-4">
        <i class="text-3xl fa-brands fa-linux"></i>
        <i class="text-3xl fa-brands fa-docker"></i>
        <img
          className="h-8"
          src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
        />
        <img
          className="h-8"
          src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
        />
        <i class="text-3xl fa-brands fa-github"></i>
        <img
          className="h-8"
          src="https://tailwindcss.com/favicons/favicon-32x32.png"
        />
      </div>
    </div>
  );
};

export default Skills;
