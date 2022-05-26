import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PurchasePage = () => {
  //   const [product, setProduct] = useState([]);
  const productId = useParams();
  useEffect(() => {
    fetch(`products.json/${productId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [productId]);
  return (
    <div>
      <div>
        <div>
          <h1>Please Confirm Your Order</h1>
        </div>
        <div>
          <div className="card -z-30 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={"img"} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-200 font-bold">{"name"}</h2>
              <div className="flex justify-between">
                <h3 className=" text-white text-lg font-semibold">
                  Price:${"price"}
                </h3>
                <h3 className=" text-white text-lg font-semibold">
                  Quantity:{"quantity"}
                </h3>
              </div>
              <p>{"description"}</p>
              <div className="card-actions justify-between items-center">
                <h3 className=" text-white text-lg font-semibold">
                  Minimum Order:{"lessOrder"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
