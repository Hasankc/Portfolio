import React from "react";
import MyImage from "../assets/myimage.png";
import { HiOutlineArrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 3 years of experience building and designing software.
            currently, I love to work on web application using technologies like
            React, Node.JS, Typescript, MongoDB.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 m-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowRight size={20} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
