import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../Assest/404.gif";

const NotFound = () => {
  return (
    <div>
      <div className="container flex justify-center items-center">
        <img className="mt-2 img-fluid rounded-2xl" src={notFound} alt="" />
      </div>
      <div className="container flex justify-center items-center">
        <Link
          to={"/"}
          className="font-bold my-5 btn border-t-cyan-800  text-2xl text-"
        >
          Go HOME{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
