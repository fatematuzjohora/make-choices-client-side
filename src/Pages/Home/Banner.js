import React from "react";
import banner from "../../Assest/banner2.jpg";

const Banner = () => {
  return (
    <div
      className=" flex flex-col text-white h-96 space-y-3 justify-center p-10"
      style={{ background: `url(${banner})` }}
    >
      <h1 className=" text-5xl font-bold">Built With Purpose</h1>
      <h3 className="text-xl font-semibold">
        Dependable, reliable and trusted by professionals for generations.
      </h3>
    </div>
  );
};

export default Banner;
