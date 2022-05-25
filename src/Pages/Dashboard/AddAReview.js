import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import auth from "../../../firebase.init";
import swal from "sweetalert";

const AddAReviw = () => {
  // const [user] = useAuthState(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      reviews: e.target.reviews?.value,
      name: e.target.name?.value,
      country: e.target.country?.value,
      star: e.target.star?.value,
      img: e.target.img?.value,
    };

    if (
      review.reviews &&
      review.star &&
      review.name &&
      review.country &&
      review.img
    ) {
      fetch(" http://localhost:5000/review/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      swal("Review Added Successfully", "", "success");
    }
    swal("Please fill all the fields", "", "error");

    e.target.reset();
  };

  const { register } = useForm();
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="card w-96 h-[550px] bg-base-300 shadow-xl  ">
        <h2 className="text-2xl text-center mt-4">Add A Review</h2>
        <div className="card-body">
          <form className="my-5 " onSubmit={handleSubmit}>
            <input
              className="input my-2"
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
            <input
              className="input my-2 "
              {...register("reviews", { required: true })}
              placeholder="Description"
            />
            <input
              className="input my-2"
              {...register("country", { required: true })}
              type="text"
              placeholder="Country"
            />
            <input
              className="input my-2"
              type="number"
              {...register("star", { required: true })}
              placeholder="Ratings"
            />

            <input
              className="input my-2 "
              {...register("img", { required: true })}
              type="text"
              placeholder="Image"
            />
            <br />
            <input className="input mx-auto " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReviw;
