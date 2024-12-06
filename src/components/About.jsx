import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 md:gap-4 py-32">
      {/* Section Title */}
      <div className="flex justify-center md:justify-start px-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-green-300">
          About Cipher Explorer
        </h1>
      </div>

      {/* Project Overview */}
      <div className="flex flex-col gap-4 px-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-blue-300">
          Explore the World of Cryptography
        </h2>
        <p className="text-sm md:text-lg text-gray-600">
          Cipher Explorer is an interactive platform designed to help you
          understand the complex world of cryptography. From base64 encoding to
          hashing algorithms, our platform provides real-time tools to explore
          encryption and decryption techniques.
        </p>
        <p className="text-sm md:text-lg text-gray-600 mt-4">
          Whether you're learning the fundamentals or deep-diving into advanced
          cryptographic methods, Cipher Explorer is your ultimate guide to
          secure data handling.
        </p>
      </div>

      {/* Key Features */}
      <div className="flex flex-col gap-4 px-10 mt-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-purple-300">
          Key Features
        </h2>
        <ul className="list-disc ml-5 text-sm md:text-lg text-gray-600">
          <li>Convert Text to Base64 and vice versa</li>
          <li>Generate secure Hash values for your data</li>
          <li>Verify your data against Hash values</li>
          <li>Real-time cipher identification tools</li>
          <li>Easy-to-use, intuitive UI designed for all users</li>
        </ul>
      </div>

      {/* Backend Technology */}
      <div className="flex flex-col gap-4 px-10 mt-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-yellow-300">
          Built with GoLang and Fiber
        </h2>
        <p className="text-sm md:text-lg text-gray-600">
          The backend of Cipher Explorer is powered by GoLang, utilizing the
          fast and lightweight Fiber framework to ensure smooth and efficient
          communication between the front-end and server. This guarantees quick
          responses, even during high traffic periods, ensuring a seamless user
          experience.
        </p>
      </div>

      {/* How to Use */}
      <div className="flex flex-col gap-4 px-10 mt-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-orange-300">
          How to Use Cipher Explorer
        </h2>
        <p className="text-sm md:text-lg text-gray-600">
          Start exploring cryptography with our simple-to-use tools. Input your
          data into the fields, select the operation you want to perform (e.g.,
          base64 encoding, hashing), and see the results instantly. It’s that
          simple to start learning and mastering encryption techniques!
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-12">
        <p className="text-sm text-gray-500">© 2024 Cipher Explorer. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default About;
