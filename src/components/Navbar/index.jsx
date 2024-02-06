import navImg from '../../assets/navigation-bar.svg'

const Navbar = (props) => {
  const { id, setId } = props;
  return (
    <div className="rounded-md bg-gray-800 text-white flex justify-between">
      <button className="font-bold text-xl" onClick={() => setId("Home")}>Portfolio.</button>
      <div className="hidden sm:block space-x-8">
        <button className={(id === 'Home' ? 'text-cyan-400' : '') + ' font-semibold'} onClick={() => setId("Home")}>Home</button>
        <button className={(id === 'About' ? 'text-cyan-400' : '') + ' font-semibold'} onClick={() => setId("About")}>About</button>
        <button className={(id === 'Skills' ? 'text-cyan-400' : '') + ' font-semibold'} onClick={() => setId("Skills")}>Skills</button>
        <button className={(id === 'Projects' ? 'text-cyan-400' : '') + ' font-semibold'} onClick={() => setId("Projects")}>Projects</button>
      </div>
      <div className='sm:hidden'>
        <img className='w-8 invert' src={navImg} />
      </div>
    </div>
  );
};

export default Navbar;
