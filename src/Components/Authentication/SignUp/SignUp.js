import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  let errorMessage;

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    fetch("https://ns-mobile-house.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: user?.user?.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data?.token);
        toast.success("Registration done");
        navigate(from, { replace: true });
      });
  }
  if (error) {
    errorMessage = <p className="text-danger">{error?.message} </p>;
  }

  const handleFormRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className="hero min-h-screen bg-cyan-100">
      <div className="hero-content flex justify-center items-center w-80">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="card-body w-full max-w-md">
            <form onSubmit={handleFormRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt text-white text-md font-semibold link link-hover"
                  >
                    Already have an account? Login.
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                {errorMessage}
                <button
                  type="submit"
                  className="btn text-white text-md font-bold btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
