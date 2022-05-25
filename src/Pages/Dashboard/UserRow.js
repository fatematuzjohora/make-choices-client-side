import React from "react";
import swal from "sweetalert";
import useAdmin from "../../hooks/useAdmin";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const [admin] = useAdmin(user);
  const makeAdmin = () => {
    fetch(` http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          swal(
            "Oops!",
            "You are not authorized to make this user an admin",
            "error"
          );
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0 && admin) {
          refetch();

          swal("Success!", "Successfully made an admin", "success");
        }
      });
  };

  const removeAdmin = () => {
    fetch(` http://localhost:5000/user/admin/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          swal(
            "Oops!",
            "You are not authorized to remove this user from admin",
            "error"
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0 && admin) {
          refetch();

          swal("Success!", "Successfully removed admin", "success");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={removeAdmin} className="btn btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
