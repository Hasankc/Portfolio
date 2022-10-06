import React from "react";
import toDo from "../assets/portfolio/To-Do-list.png";
import drum from "../assets/portfolio/Drum.png";
import elisa from "../assets/portfolio/Elisa.png";
import dom from "../assets/portfolio/Dom.png";
import dogsAPI from "../assets/portfolio/DogsAPI.png";
import tindog from "../assets/portfolio/Tindog.png";

const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: elisa,
    // },
    {
      id: 2,
      src: toDo,
      title: "To do list",
    },
    // {
    //   id: 3,
    //   src: drum,
    // },
    {
      id: 4,
      src: dom,
      title: "Dom Game",
    },
    // {
    //   id: 5,
    //   src: dogsAPI,
    // },
    {
      id: 6,
      src: tindog,
      title: "App for dogs",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 w-25 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
