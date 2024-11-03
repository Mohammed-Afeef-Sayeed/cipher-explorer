import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
import Practice from "./components/Practice";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div
        className="absolute w-full min-h-screen bg-[url('./assets/images/cipher-gif.gif')] text-white
        bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
