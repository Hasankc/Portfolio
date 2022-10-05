import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          facere eius rerum quis, vel error cumque itaque nesciunt autem
          explicabo est eum necessitatibus consequatur beatae pariatur excepturi
          commodi maxime ipsum deleniti. Temporibus culpa ullam voluptatem
          reprehenderit, fugit vero a nobis earum aspernatur quasi,
          necessitatibus dignissimos illum mollitia magni est sequi.
        </p>
        <br />
        <p className="text-xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          possimus quam nobis inventore fuga excepturi? Facere fuga provident
          minima consequuntur ipsum aspernatur suscipit, minus, consectetur
          perferendis sapiente sed at libero laudantium amet laboriosam debitis
          ex eius, aliquam itaque possimus! Velit cum magni et repellat quis
          nulla aliquam atque hic rerum.
        </p>
      </div>
    </div>
  );
}

export default About;
