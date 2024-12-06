import axios from 'axios';
import React, { useState } from 'react';
import { MdSecurity } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Signup = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userName, email, password)

    try {
      const payload = {
        userName,
        email,
        password,
      };

      const response = await axios.post("http://localhost:8080/api/register", payload);
      console.log(response);
      console.log(response.data)
      setUserName("");
      setEmail("");
      setPassword("");
      toast.success("Signup Successfull!!")
      navigate("/login")

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error)
    }

  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white bg-black">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-screen bg-[url('./assets/images/cipher-gif.gif')] 
            bg-cover bg-no-repeat bg-center lg:order-2">
      </div>
      
      {/* Right Side - Signup Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 lg:p-16 bg-gray-900 bg-opacity-90 z-10 lg:order-1">
        <div className="w-full max-w-md p-6 md:p-10 rounded-lg shadow-lg animate-slideIn">
          <div className="flex flex-col items-center mb-6 animate-fadeIn">
            <MdSecurity className="text-5xl text-green-500 mb-4 animate-pulse" />
            <h2 className="text-3xl font-semibold">Signup</h2>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-gray-400 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
            >
              Signup
            </button>
          </form>
          <div className="py-3 px-1">
            <p className="text-[14px] font-semibold">Already have an account? <Link to="/login"><span className="text-blue-400 hover:text-blue-500">Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
