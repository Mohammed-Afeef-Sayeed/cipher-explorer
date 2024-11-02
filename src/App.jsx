import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
import Practice from "./components/Practice";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div
      className="min-h-screen bg-[url('./assets/images/bg.jpg')] text-white
      bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
};

export default App;
