import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, quantity, lessOrder, price } = product;
  const navigate = useNavigate();
  const handleBuyBtn = (_id) => {
    navigate(`/products/${_id}`);
  };
  return (
    <div class="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 className="card-title text-slate-200 font-bold">{name}</h2>
        <div className="flex justify-between">
          <h3 className=" text-white text-lg font-semibold">Price:${price}</h3>
          <h3 className=" text-white text-lg font-semibold">
            Quantity:{quantity}
          </h3>
        </div>

        <p>{description}</p>
        <div class="card-actions justify-between items-center">
          <h3 className=" text-white text-md font-semibold">
            Minimum Order:{lessOrder}
          </h3>
          <button onClick={() => handleBuyBtn(_id)} class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
