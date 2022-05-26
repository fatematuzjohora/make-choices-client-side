import React from "react";

const Review = ({ review }) => {
  const { reviews, img, user_name, country } = review;
  return (
    <div className="flex flex-col p-4 text-accent card bg-base-100 shadow-xl justify-center">
      <div>
        <p>{reviews}</p>
      </div>
      <div className="flex p-3 space-x-5 items-center">
        <div className=" outline outline-offset-2 outline-blue-500 rounded-full">
          <img src={img} alt="" />
        </div>
        <div>
          <h2>{user_name}</h2>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
