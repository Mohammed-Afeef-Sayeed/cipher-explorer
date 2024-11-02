import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="p-4 bg-slate-900 text-white">
        <div className="">
          <nav className="flex justify-around items-center">
            <a className="text-[23px] font-bold bg-white px-4 py-2 rounded-t-lg border-red-500 border-x-4 border-y-2 text-black">
              <h1 className="">Logo</h1>
            </a>
            <div className="flex gap-7 text-lg font-bold">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Learn</a>
              <a href="">Practice</a>
            </div>
            <div>
              <button className="bg-green-500 px-4 py-2 text-xl font-bold shadow-lg shadow-green-200 text-black rounded-lg active:scale-[0.8]">
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>
      <hr className="h-10 text-white" />
    </>
  );
};

export default Navbar;
