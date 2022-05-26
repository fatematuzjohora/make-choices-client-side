import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div>
      <h2 className="text-center">Welcome to dashboard</h2>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>

            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/order">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add A Review</Link>
            </li>

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allUser">All Users</Link>
                </li>

                <li>
                  <Link to="/dashboard/manageOrder">Manage All Orders</Link>
                </li>

                <li>
                  <Link to="/dashboard/addProduct">Add A product</Link>
                </li>

                <li>
                  <Link to="/dashboard/manageProduct">Manage Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
