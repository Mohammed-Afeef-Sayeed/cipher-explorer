import React from "react";
import { FaShieldAlt, FaDatabase, FaKey, FaLock } from "react-icons/fa";
import { GiLockedChest } from "react-icons/gi";

const Learn = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#1e1e1e] min-h-screen text-white">
      <div className="py-28 px-6 sm:px-10 lg:px-28">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
          Master the Secrets of Cryptography
        </h1>
        <p className="text-center text-lg sm:text-xl mt-4 max-w-2xl mx-auto text-gray-400">
          Explore the world of encryption, decryption, hashing, and more. Discover how cryptographic
          algorithms safeguard your data in a digital world full of challenges.
        </p>
      </div>

      {/* Section 1: Cryptography Basics */}
      <section className="px-6 sm:px-10 lg:px-28 py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-400">Cryptography Basics</h2>
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            Cryptography is the backbone of cybersecurity. Understanding how data is encrypted and
            decrypted is essential for protecting sensitive information.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Symmetric Encryption</h3>
            <p className="mt-2 text-gray-400">
              In symmetric encryption, the same key is used for both encryption and decryption. It's
              fast but requires secure key exchange.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaKey className="text-4xl text-purple-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Asymmetric Encryption</h3>
            <p className="mt-2 text-gray-400">
              Asymmetric encryption uses two keys: a public key for encryption and a private key for
              decryption. This ensures secure communication over insecure channels.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <GiLockedChest className="text-4xl text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Hashing</h3>
            <p className="mt-2 text-gray-400">
              Hashing converts data into a fixed-size value. It’s often used for password storage and
              ensuring data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Advanced Cryptographic Techniques */}
      <section className="px-6 sm:px-10 lg:px-28 py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">
            Advanced Cryptographic Techniques
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            Take a deep dive into more advanced concepts like hashing algorithms, digital signatures,
            and public-key infrastructure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaLock className="text-4xl text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Digital Signatures</h3>
            <p className="mt-2 text-gray-400">
              Digital signatures provide authenticity and non-repudiation, ensuring data integrity and
              verifying the sender's identity.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaDatabase className="text-4xl text-teal-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Public Key Infrastructure (PKI)</h3>
            <p className="mt-2 text-gray-400">
              PKI is a framework for managing digital keys and certificates, which are essential for
              secure communication and authentication.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaShieldAlt className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Zero-Knowledge Proofs</h3>
            <p className="mt-2 text-gray-400">
              Zero-knowledge proofs allow one party to prove to another party that they know a secret
              without revealing the secret itself.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Tools and Techniques */}
      <section className="px-6 sm:px-10 lg:px-28 py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
            Tools & Techniques for Cryptographic Practice
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            Learn how to apply cryptographic concepts with the help of powerful tools and libraries
            for practical implementation in real-world applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Cryptographic Libraries</h3>
            <p className="mt-2 text-gray-400">
              Leverage libraries like OpenSSL, CryptoJS, and BouncyCastle to implement various
              cryptographic algorithms in your applications.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Public Key Servers</h3>
            <p className="mt-2 text-gray-400">
              Use public key servers to manage and retrieve keys for secure communications.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mt-4 text-gray-100">Cryptanalysis Tools</h3>
            <p className="mt-2 text-gray-400">
              Discover cryptanalysis tools used to test the strength and weaknesses of cryptographic
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] py-16 text-center text-gray-500">
        <p className="text-sm sm:text-lg">© 2024 Cipher Explorer | All Rights Reserved</p>
        <p className="text-sm sm:text-lg mt-2">Powered by React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Learn;
