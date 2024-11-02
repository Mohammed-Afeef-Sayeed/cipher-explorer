import React from "react";

const Home = () => {
  return (
    <div className="px-4">
      <div className="px-5 flex justify-center md:justify-end">
        <h1 className="px-10 font-bold text-2xl md:text-3xl lg:text-6xl flex flex-col gap-5 pr-10">
          <span>Unlock</span>
          <span>the Secrets of </span> <span>Cryptography</span>
        </h1>
      </div>
      <div className="md:px-10 mt-52 py-10 flex sm:justify-start md:justify-normal md:w-[450px]">
        <h2 className="font-bold text-2xl md:text-4xl ml-7">
          Master the Art of Encryption and Decryption with Interactive Lessons
          and Real-Time Cipher Identification.
        </h2>
      </div>
    </div>
  );
};

export default Home;
