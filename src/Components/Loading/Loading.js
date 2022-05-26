import React from "react";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center my-8 p-3">
      <progress className="progress w-56 bg-orange-500"></progress>
    </div>
  );
};

export default Loading;
