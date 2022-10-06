import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! My name is Hasan and I enjoy creating things that live on the
          internet. My interest in web development started back in 2020 when I
          decided to change into the fild gives that gives me freedom and it's
          fun to work in — turns out this is exactly what software development
          is? Fast-forward to today, and I’ve had the privilege of working on
          different projects and collaborat with different people.
        </p>

        <br />

        <p className="text-xl">
          My main foce these days is Building accessible, inclusive products and
          digital experiences, beautiful pixels, and writing clean, accessible,
          human code.
        </p>
      </div>
    </div>
  );
};

export default About;
