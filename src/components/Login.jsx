import React from 'react'
// import { FaLock } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-white bg-black">
      <div className="w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-screen bg-[url('./assets/images/cipher-gif.gif')] 
            bg-cover bg-no-repeat bg-center">
      </div>
      
       {/* Right Side - Login Form */}
       <div className="lg:w-1/2 w-full flex items-center justify-center p-8 lg:p-16 bg-gray-900 bg-opacity-90 z-10">
        <div className="w-full max-w-md p-6 md:p-10 rounded-lg shadow-lg animate-slideIn">
          <div className="flex flex-col items-center mb-6 animate-fadeIn">
            <MdSecurity className="text-5xl text-green-500 mb-4 animate-pulse" />
            <h2 className="text-3xl font-semibold">Login</h2>
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-400 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your email"
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
            >
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login