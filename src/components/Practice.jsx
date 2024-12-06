import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";

const Practice = () => {
  const [text1, setText1] = useState("");
  const [base641, setBase641] = useState("");

  const [text2, setText2] = useState("");
  const [base642, setBase642] = useState("");

  const [text3, setText3] = useState("");
  const [hash1, setHash1] = useState("");

  const [text4, setText4] = useState("");
  const [hash2, setHash2] = useState("");
  const [verify, setVerify] = useState("");

  const convertTextToBase64 = async (e) => {
    e.preventDefault();

    try {
      const payload = { text: text1 };

      const response = await axios.post(
        "http://localhost:8080/api/convertTextToBase64",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setBase641(response.data.base64);
      setText1("");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  const convertBase64ToText = async (e) => {
    e.preventDefault();
    try {
      const payload = { base64: base642 }
      const response = await axios.post(
        "http://localhost:8080/api/convertBase64ToText",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setText2(response.data.text);
      setBase642("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong")
    }
  }

  const convertTextToHash = async (e) => {
    e.preventDefault();
    try {
      const payload = { text: text3 }
      const response = await axios.post(
        "http://localhost:8080/api/hash",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setHash1(response.data.hashed);
      setText3("");

    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong")
    }
  }

  const verifyTextAndHash = async (e) => {
    e.preventDefault();
    try {
      const payload = { text: text4, hash: hash2 }
      const response = await axios.post(
        "http://localhost:8080/api/verifyHash",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response)
      setVerify("Text Matches with the hashValue");
      // setText4("");
      // setHash2("");

    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 md:gap-4 py-32">
      {/* Convert Text To Base64 */}
      <div className="flex flex-col gap-4 px-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-green-300">
          Convert Text to Base64
        </h2>
        <input
          type="text"
          className="h-10 w-full md:w-96 px-2 rounded-lg outline-none text-black bg-gray-300"
          placeholder="Enter T3XT"
          onChange={(e) => setText1(e.target.value)}
          value={text1}
        />
        <button
          className="p-2 rounded-lg text-sm font-semibold text-black active:scale-[.9] bg-green-500 w-[100px]"
          onClick={(e) => convertTextToBase64(e)}
        >
          convert
        </button>
        {base641.length > 0 && (
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-400 font-semibold">Base64 Value: </p>
            <p
              className="text-lg text-blue-300 font-bold break-words overlfow-x-hidden cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(base641);
                toast.success('Copied to clipboard!');
              }}
            >
              {base641}
            </p>
          </div>
        )}
      </div>

      {/* Spacer to push the bottom section down */}
      <div className="flex-grow"></div>

      {/* Convert Base64 to Text */}
      <div className="flex flex-col md:ml-auto gap-4 px-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-purple-300">
          Convert Base64 to Text
        </h2>
        <input
          type="text"
          className="h-10 w-full md:w-96 px-2 rounded-lg outline-none text-black bg-gray-300"
          placeholder="Enter B4SE64 Value"
          onChange={(e) => setBase642(e.target.value)}
          value={base642}
        />
        <button
          className="p-2 rounded-lg text-sm font-semibold text-black active:scale-[.9] bg-purple-500 w-[100px]"
          onClick={(e) => convertBase64ToText(e)}
        >
          convert
        </button>
        {text2.length > 0 && (
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-400 font-semibold">Text: </p>
            <p
              className="text-lg text-blue-300 font-bold break-words overflow-x-hidden cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(text2);
                toast.success('Copied to clipboard!');
              }}
            >
              {text2}
            </p>
          </div>
        )}
      </div>

      {/* Spacer to push the bottom section down */}
      <div className="flex-grow"></div>
      <div className="flex-grow"></div>

      {/* Convert text to hash */}
      <div className="flex flex-col gap-4 px-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-red-300">
          Convert Text To HashValue
        </h2>
        <input
          type="text"
          className="h-10 w-full md:w-96 px-2 rounded-lg outline-none text-black bg-gray-300"
          placeholder="Enter T3XT"
          onChange={(e) => setText3(e.target.value)}
          value={text3}
        />
        <button
          className="p-2 rounded-lg text-sm font-semibold text-black active:scale-[.9] bg-red-500 w-[100px]"
          onClick={(e) => convertTextToHash(e)}
        >
          convert
        </button>
        {hash1.length > 0 && (
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-400 font-semibold">Hash Value: </p>
            <p
              className="text-lg text-blue-300 font-bold break-words overflow-x-hidden cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(hash1);
                toast.success('Copied to clipboard!');
              }}
            >
              {hash1}
            </p>
          </div>
        )}
      </div>


      {/* Spacer to push the bottom section down */}
      <div className="flex-grow"></div>
      <div className="flex-grow"></div>

      {/* verify text with hash */}
      <div className="flex flex-col gap-4 md:ml-auto px-10">
        <h2 className="text-[20px] md:text-[28px] font-bold text-orange-300">
          Verify Text And Hash
        </h2>
        <input
          type="text"
          className="h-10 w-full md:w-96 px-2 rounded-lg outline-none text-black bg-gray-300"
          placeholder="Enter T3XT"
          onChange={(e) => setText4(e.target.value)}
          value={text4}
        />
        <input
          type="text"
          className="h-10 w-full md:w-96 px-2 rounded-lg outline-none text-black bg-gray-300"
          placeholder="Enter Hash"
          onChange={(e) => setHash2(e.target.value)}
          value={hash2}
        />
        <button
          className="p-2 rounded-lg text-sm font-semibold text-black active:scale-[.9] bg-orange-500 w-[100px]"
          onClick={(e) => verifyTextAndHash(e)}
        >
          verify
        </button>
        {verify.length > 0 && (
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-400 font-semibold">Verification: </p>
            <p
              className="text-lg text-blue-300 font-bold break-words overflow-x-hidden"
            >
              {verify}
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Practice;
