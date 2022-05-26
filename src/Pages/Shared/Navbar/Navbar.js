import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
    toast.success("Logout success");
  };
  return (
    <div className="sticky top-0 z-30">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ActiveLink
              className="leading-relaxed font-bold text-lg inline-block mr-4"
              to="/"
            >
              <h1 className=" text-orange-400">Make Choices</h1>
            </ActiveLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <ActiveLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/products"
                >
                  PRODUCTS
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/portfolio"
                >
                  PORTFOLIO
                </ActiveLink>
              </li>
              {user && (
                <li className="nav-item">
                  <ActiveLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/dashboard"
                  >
                    Dashboard
                  </ActiveLink>
                </li>
              )}
              
              <li className="nav-item">
                <ActiveLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/blogs"
                >
                  BLOG
                </ActiveLink>
              </li>
              <li className="nav-item">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Logout
                  </button>
                ) : (
                  <ActiveLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/login"
                  >
                    LOGIN
                  </ActiveLink>
                )}
              </li>
              <li className="nav-item">
                {user ? (
                  ""
                ) : (
                  <ActiveLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/signUp"
                  >
                    SignUp
                  </ActiveLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
