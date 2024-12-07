import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  
  const [userName, setUserName] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    const authenticate = async () => {
      try {

        const response = await axios.get("http://localhost:8080/api/user", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        // console.log(response.data.user.userName);
        setUserName(response.data.user.userName);
        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error + " please login");
        setUserName("");
      }
    }
    authenticate();
  }, [])
  
  const toggleSidebar = (check) => {
    if(check === "/practice" && userName.length === 0) {
      toast.error("Login to access Practice")
      setTimeout(() => navigate("/login"), 100);
      return;
    }
    setIsOpen(!isOpen);
  };

  const checkAuth = () => {
    if(userName.length === 0) {
      toast.error("Login to access Practice")
      setTimeout(() => navigate("/login"), 100);
    }
  }

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/logout",{}, {
        withCredentials: true,
      })
      console.log(response);
      toast.success(response.data.message);
      setUserName("");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Logout failed");
    }
  }

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
            <h1 className="">C1PH3R</h1>
          </Link>
          <div className="hidden md:flex gap-7 text-lg font-bold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/practice" onClick={() => checkAuth()}>Practice</Link>
          </div>
          <div className="flex gap-3 items-center justify-center">
            {userName.length === 0 ?
              <Link to="/login">
                <button className="bg-green-500 px-2 md:px-4 py-1 md:py-2 text-lg md:text-xl font-bold shadow-lg shadow-green-200 text-black rounded-lg active:scale-[0.8]">
                  Login
                </button>
              </Link> :
              <>
                <p className="text-green-500 px-2 md:px-4 py-1 md:py-2 text-lg md:text-xl font-bold">{userName}</p>
                <RiLogoutCircleLine
                  className="text-red-500 text-lg md:text-xl font-extrabold cursor-pointer"
                  onMouseEnter={() => setShowTooltip(true)} 
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => logout()}
                />
                {showTooltip && (
                  <div className="absolute rounded-lg bg-red-300 text-black p-2 mt-[80px] ml-[90px] text-sm font-bold">
                    Logout
                  </div>
                )}
              </>
            }
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-800 text-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col items-center mt-16">
          <Link to="/" className="py-2 text-lg font-bold" onClick={() => toggleSidebar("/")}>Home</Link>
          <Link to="/about" className="py-2 text-lg font-bold" onClick={() => toggleSidebar("/about")}>About</Link>
          <Link to="/learn" className="py-2 text-lg font-bold" onClick={() => toggleSidebar("/learn")}>Learn</Link>
          <Link to="/practice" className="py-2 text-lg font-bold" onClick={() => toggleSidebar("/practice")}>Practice</Link>
        </div>
      </div>

      <hr className="h-10 text-white" />
    </div>
  );
};

export default Navbar;
