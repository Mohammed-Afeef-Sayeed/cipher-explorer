import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
import Practice from "./components/Practice";
import { Routes, Route, useLocation } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {

  const location = useLocation();

  return (
    <>
      <div
        className="z-0 absolute w-full min-h-screen bg-[url('./assets/images/cipher-gif.gif')] text-white
        bg-cover bg-center bg-no-repeat"
      >
        {/* <Navbar /> */}
        {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
