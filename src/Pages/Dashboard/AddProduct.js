import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name?.value,
      price: e.target.price?.value,
      image: e.target.image?.value,
      minimum: e.target.minimum?.value,
      stock: e.target.stock?.value,
      email: user?.email,
    };

    if (
      product.name &&
      product.price &&
      product.image &&
      product.minimum &&
      product.stock
    ) {
      fetch(" http://localhost:5000/product/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      swal("Your product successfully added!", "success");
    }

    swal("Please", "Fill up all of input!", "error");

    e.target.reset();
  };

  const { register } = useForm();
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="card w-96 h-[550px] bg-base-300 shadow-xl  ">
        <h2 className="text-2xl text-center mt-4">Add Items</h2>
        <div className="card-body">
          <form className="my-5 " onSubmit={handleSubmit}>
            <input
              className="input my-2 "
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              className="input my-2"
              {...register("minimum", { required: true })}
              type="number"
              placeholder="Minimum "
            />
            <input
              className="input my-2"
              {...register("stock", { required: true })}
              type="number"
              placeholder="Stock"
            />
            <input
              className="input my-2"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <input
              className="input my-2"
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
            />
            <input
              className="input my-2 "
              {...register("image", { required: true })}
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

export default AddProduct;
