import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";

const Payment = () => {
  const [user, loading] = useAuthState(auth);

  const { productId } = useParams();
  console.log(productId);
  const [products, setProducts] = useState({});
  console.log(products);

  useEffect(() => {
    fetch(` http://localhost:5000/purchase/${productId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [productId]);

  // const main = products?.find(product => product?._id === id);
  // console.log(products._id);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Product Name : {products?.name}</h2>
        <p>Customer Name : {user?.displayName}</p>
        <p>Total Price : {products?.price}</p>
        <p>Quantity : {products?.quantity}</p>
        <p>Phone Number : {products?.phone}</p>
        {products.price && !products.paid && (
          <Link to={`/dashboard/paymentSystem/${products._id}`}>
            <button className="btn btn-xs">Pay</button>
          </Link>
        )}
        {products.price && products.paid && (
          <span className="text-success">Paid</span>
        )}
      </div>
    </div>
  );
};

export default Payment;
