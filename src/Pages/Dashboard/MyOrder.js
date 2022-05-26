import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeleteModal from "./DeleteModal";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [modalClose, setModalClose] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5000/orders?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate, orders]);

  return (
    <div>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 border-primary">My Orders</span>
      </h3>
      <div class="overflow-x-auto mx-6">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (
                {
                  _id,
                  productName,
                  quantity,
                  paid,
                  price,
                  transactionId,
                  deleverd,
                },
                index
              ) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{productName}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>
                    {price && !paid && (
                      <Link to={`/dashboard/payment/${_id}`}>
                        <button className="btn btn-xs btn-primary">pay</button>
                      </Link>
                    )}
                    {price && paid && (
                      <div>
                        {deleverd ? (
                          <div>
                            <p>
                              <span className="text-success">Paid</span>
                            </p>
                            <p>
                              Transaction id:{" "}
                              <span className="text-success">
                                {transactionId}
                              </span>
                            </p>
                          </div>
                        ) : (
                          <p>
                            <span className="text-primary">Pending...</span>
                          </p>
                        )}
                      </div>
                    )}
                  </td>
                  <td>
                    {!paid && (
                      <label
                        onClick={() => setModalClose("open")}
                        for="delete-modal"
                        className="btn btn-xs btn-denger"
                      >
                        Cancel
                      </label>
                    )}
                    {modalClose && (
                      <DeleteModal
                        setModalClose={setModalClose}
                        _id={_id}
                        productName={productName}
                      ></DeleteModal>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

// import React, { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// // import { useQuery } from "react-query";

// const MyOrder = () => {
//   const [user] = useAuthState(auth);
//   const email = user?.email;

//   console.log(email);
//   useEffect(() => {
//     fetch(` http://localhost:5000/purchase/${email}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   },[email])

//   // fetch(` http://localhost:5000/purchase/${email}`, {
//   //   method: "GET",
//   //   // headers: {
//   //   //   "content-type": "application/json",
//   //   //   // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   //   // },
//   // })
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   return (
//     <div>
//       <h2>this is order page</h2>
//     </div>
//   );
// };

// export default MyOrder;
