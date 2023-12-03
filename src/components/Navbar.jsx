import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-600 bg-slate-900/70 backdrop-blur-md">
      <div className="flex h-[72px] items-center justify-between px-5 py-2 text-white">
        <div>
          <p className="text-based font-semibold md:text-xl xl:text-2xl">
            <Link to="/cinema-hunt/">Cinema Hunt</Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
