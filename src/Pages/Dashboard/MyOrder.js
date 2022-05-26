// import React, { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// // import { useQuery } from "react-query";

// const MyOrder = () => {
//   const [user] = useAuthState(auth);
//   const email = user?.email;

//   console.log(email);
//   useEffect(() => {
//     fetch(` http://localhost:5000/purchase/${email}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   },[email])
  
//   // fetch(` http://localhost:5000/purchase/${email}`, {
//   //   method: "GET",
//   //   // headers: {
//   //   //   "content-type": "application/json",
//   //   //   // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   //   // },
//   // })
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   return (
//     <div>
//       <h2>this is order page</h2>
//     </div>
//   );
// };

// export default MyOrder;
