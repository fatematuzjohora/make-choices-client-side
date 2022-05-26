import React from "react";

const BusinessSummary = () => {
  return (
    <div className="my-7">
      <div className=" my-7 flex justify-center items-center">
        <h1 className="text-2xl underline text-sky-300 ">
          Our Business Summary
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="stats shadow -z-30">
          <div className="stat">
            <div className="stat-figure text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Satisfied Customer</div>
            <div className="stat-value text-purple-600">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Website Visitor</div>
            <div className="stat-value text-pink-600">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-pink-600">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?w=128&h=128"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">99%</div>
            <div className="stat-title">Positive Reviews</div>
            <div className="stat-desc text-pink-600">
              26k+ Products Delivered{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
