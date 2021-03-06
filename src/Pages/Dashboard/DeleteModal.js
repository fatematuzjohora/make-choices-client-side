// import React, { useState } from 'react';
import { toast } from "react-toastify";

const DeleteModal = () => {
  const handleDelete = ({ setModalClose, _id }) => {
    fetch(`https://boiling-scrubland-64435.herokuapp.com/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModalClose("");
        toast.success("Delete Success");
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="text-lg my-4 text-red-500">
            Are you sure? Cancel order for this product
          </p>
          <button onClick={handleDelete} className="btn btn-xs btn-denger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
