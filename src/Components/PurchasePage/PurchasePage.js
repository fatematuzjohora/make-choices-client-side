import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PurchaseDetail from "./PurchaseDetail";

const PurchasePage = () => {
  const [product, setProduct] = useState([]);
  const [refresh] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    fetch(`https://boiling-scrubland-64435.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, refresh]);
  const { name, img, description, quantity, lessOrder, price } = product;
  return (
    <div>
      <div>
        <div className=" my-7 flex justify-center items-center">
          <h1 className="text-2xl font-serif font-bold text-sky-500">
            Please Confirm Your Order
          </h1>
        </div>
        <div className=" my-7 flex justify-center items-center bg-no-repeat bg-contain bg-top ">
          <div className="card glass shadow-xl">
            <figure>
              <img className="p-4" src={img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{name}</h2>
              <h3 className="card-title">
                <span className="text-xl font-semibold">Price:</span>${price}
              </h3>
              <h3 className="card-title">
                <span className="text-xl font-semibold">Quantity:</span>$
                {quantity}
              </h3>
              <h3 className="card-title">
                <span className="text-xl font-semibold">Minimum Order:</span>$
                {lessOrder}
              </h3>
              <p className=" max-w-sm">{description}</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <PurchaseDetail />
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
