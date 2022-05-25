// import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const ManageProductCard = ({ product, index }) => {
  const { name, price, quantity, _id } = product;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(_id);
  const { isLoading, refetch } = useQuery();
  const handleDelete = (e) => {
    e.preventDefault();
    if (admin) {
      fetch(` http://localhost:5000/product/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("successfully", data);
        });
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
      refetch();
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            <tr>
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <button onClick={handleDelete} className="btn btn-xs mt-4">
                Delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProductCard;
