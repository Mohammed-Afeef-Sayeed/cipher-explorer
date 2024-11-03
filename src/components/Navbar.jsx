import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-0 fixed w-full z-20">
      <div className="p-4 bg-slate-900 text-white">
        <nav className="flex justify-between items-center">
          <div className="flex md:hidden">
            <FaHamburger className="text-xl cursor-pointer" onClick={toggleSidebar} />
          </div>
          <Link
            to="/"
            className="text-[20px] md:text-[23px] font-bold bg-white px-2 md:px-4 py-1 md:py-2 rounded-t-lg border-red-500 border-x-4 border-y-2 text-black"
          >
            <h1 className="">Logo</h1>
          </Link>
          <div className="hidden md:flex gap-7 text-lg font-bold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/practice">Practice</Link>
          </div>
          <div>
            <Link to="/login">
              <button className="bg-green-500 px-2 md:px-4 py-1 md:py-2 text-lg md:text-xl font-bold shadow-lg shadow-green-200 text-black rounded-lg active:scale-[0.8]">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-800 text-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col items-center mt-16">
          <Link to="/" className="py-2 text-lg font-bold" onClick={toggleSidebar}>Home</Link>
          <Link to="/about" className="py-2 text-lg font-bold" onClick={toggleSidebar}>About</Link>
          <Link to="/learn" className="py-2 text-lg font-bold" onClick={toggleSidebar}>Learn</Link>
          <Link to="/practice" className="py-2 text-lg font-bold" onClick={toggleSidebar}>Practice</Link>
        </div>
      </div>

      <hr className="h-10 text-white" />
    </div>
  );
};

export default Navbar;
