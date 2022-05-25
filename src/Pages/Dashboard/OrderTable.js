import React, { useState } from "react";
import swal from "sweetalert";
import useAdmin from "../../hooks/useAdmin";

const OrderTable = ({ order }) => {
  const { _id } = order;
  const [accept, setAccept] = useState(false);
  const [admin] = useAdmin();
  const handleAccept = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            <tr>
              <td>{order?.name}</td>
              <td>{order?.productName}</td>
              <td>{order?.price}</td>
              <button onClick={handleAccept} className="btn btn-xs mt-4">
                Accept
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
