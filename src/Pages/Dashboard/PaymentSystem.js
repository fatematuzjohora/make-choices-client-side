import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4LmZHTDaUXZqjRqB9lpRwXImicBLiI4wp67J2kOWUPEICZhUZjbv2fTjvjRYqF2SJNqULWqn6ZphfYCg0UABX700WyFc2lSn"
);
const PaymentSystem = () => {
  const { productId } = useParams();

  const url = ` http://localhost:5000/purchase/${productId}`;

  const { data: product, isLoading } = useQuery(["booking", productId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {product.name}</p>
          <h2 className="card-title">Please Pay for {product.productName}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">${product.price}</span> Of
            Quantity :{" "}
            <span className="text-orange-700"> {product.quantity}</span>{" "}
          </p>
          <p>Please pay:Total ${product.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;
