import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";

const MyProfile = (e) => {
  const [user] = useAuthState(auth);

  const { isLoading, refetch } = useQuery();

  const email = user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = {
      name: user?.displayName,
      education: e.target.education?.value,
      job: e.target.job?.value,
      phone: e.target.phone?.value,
      city: e.target.city?.value,
    };

    if (
      users.name &&
      users.education &&
      users.job &&
      users.phone &&
      users.city
    ) {
      fetch(` http://localhost:5000/profile/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(users),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      e.target.reset();
      refetch();
    }
  };

  const { register } = useForm();
  const [profile, setProfile] = useState();
  if (isLoading) {
    return <Loading />;
  }

  fetch(` http://localhost:5000/profile/${email}`)
    .then((res) => res.json())
    .then((data) => {
      setProfile(data);
    });
  return (
    <div className="flex justify-center items-center">
      <div className="m-5">
        <div className="card w-96 bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> Name : {profile?.name}</h2>
            <p>Education : {profile?.education}</p>
            <p>Job : {profile?.job}</p>
            <p>City : {profile?.city}</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <form className="my-5 " onSubmit={handleSubmit}>
            <input
              className="input my-2 "
              {...register("job")}
              placeholder="Job"
            />
            <input
              className="input my-2 "
              {...register("education")}
              placeholder="Education"
            />

            <input
              className="input my-2 "
              type="number"
              {...register("phone")}
              placeholder="Phone"
            />

            <input
              className="input my-2 "
              {...register("city")}
              placeholder="City"
            />

            <br />
            <input className="input mx-auto " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
