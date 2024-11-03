import React from "react";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 bg-opacity-80 text-center text-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-sm sm:max-w-md lg:max-w-lg animate-fadeIn">
        <div className="flex flex-col items-center">
          <FaBolt className="text-6xl sm:text-7xl lg:text-8xl text-yellow-400 animate-pulse mb-3 sm:mb-4" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-500 animate-glow mb-3 sm:mb-4">
            404
          </h1>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
          The page you're looking for doesn't exist. It might have been removed or the link is broken.
        </p>
        <Link
          to="/"
        >
          <button
            className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 hover:scale-[1.02] active:scale-[0.9]"
          >
          Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
