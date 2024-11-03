import React from "react";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 bg-opacity-80 text-center text-white p-8 rounded-lg shadow-lg max-w-md animate-fadeIn">
        <div className="flex flex-col items-center">
          <FaBolt className="text-7xl text-yellow-400 animate-pulse mb-4" />
          <h1 className="text-6xl font-bold text-red-500 animate-glow mb-4">404</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          The page you're looking for doesn't exist. It might have been removed or the link is broken.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
