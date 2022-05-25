import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useTokens from "../../../hooks/useTokens";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // let from = location.state?.from?.pathname || "/home";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let errorMessage;
  const [token] = useTokens(user);

  let signUpError;

  if (user) {
    navigate("/home");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    toast.success("Your SingUp successfull done");
  }
  if (loading || updating) {
    return <Loading />;
  }
  if (error || updateError) {
    signUpError = (
      <p className="text-red-500">
        {" "}
        <small>{error?.message || updateError?.message}</small>{" "}
      </p>
    );
  }
  if (token) {
    navigate("/dashboard");
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="hero min-h-screen bg-cyan-100">
      <div className="hero-content flex justify-center items-center w-80">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="card-body w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-md font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 character or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
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
                {signUpError}
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
