import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-base-200">
      <div className=" flex flex-col justify-center items-center font-bold text-3xl text-teal-400">
        <h1>Welcome To my Portfolio</h1>
      </div>
      <div className=" h-1 bg-teal-900 mx-52 my-3 rounded-full"></div>
      <div className="flex flex-col items-center">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <span class="text-3xl text-white font-semibold font-serif">Ns</span>
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-pink-400 text-2xl font-sans">
            Fatima tuz zuhra tonni
          </h1>
        </div>
        <div>
          <h1 className=" font-bold text-pink-400 text-2xl font-sans">
            Email: fatematjt@gmail.com
          </h1>
        </div>
      </div>
      <div className=" ml-10 mt-10">
        <h1 className=" text-xl font-bold text-red-300">My Skills:</h1>
        <ul className=" font-semibold ml-14">
          <li>Html -5</li>
          <li>Css -3</li>
          <li>JavaScript</li>
          <li>ReactJs library</li>
          <li>Express framwork</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className=" mt-7">
        <div className=" flex items-center justify-center">
          <h1 className=" text-xl font-bold text-sky-600 underline">
            My Last 3 Projects
          </h1>
        </div>
        <div className=" space-y-5 my-4">
          <div className=" ml-10 p-5 rounded-xl flex flex-row items-center text-lg space-x-5 h-9 bg-cyan-300 hover:bg-cyan-200">
            <p className="font-bold">1.</p>
            <h1 className="  text-indigo-400 font-bold">SkyLand Computer</h1>
            <a
              className=" text-blue-500"
              href="https://skyland-computer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
          <div className=" ml-10 p-5 rounded-xl flex flex-row items-center text-lg space-x-5 h-9 bg-cyan-300 hover:bg-cyan-200">
            <p className="font-bold">1.</p>
            <h1 className="  text-indigo-400 font-bold">Learn Pick</h1>
            <a
              className=" text-blue-500"
              href=" https://learnpick-d5bf3.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
          <div className=" ml-10 p-5 rounded-xl flex flex-row items-center text-lg space-x-5 h-9 bg-cyan-300 hover:bg-cyan-200">
            <p className="font-bold">1.</p>
            <h1 className="  text-indigo-400 font-bold">watch Reviews</h1>
            <a
              className=" text-blue-500"
              href="https://h-watch-review.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
