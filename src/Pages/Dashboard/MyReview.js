import React, { useEffect, useState } from "react";
import ReviewCard from "../Home/Reviews/Review/Review";

const MyReview = () => {
  const [reviews, setReviews] = useState([0]);

  useEffect(() => {
    fetch(" http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-[200px] p-12">
      <h2 className="text-3xl text-center mb-28 underline">Reviews</h2>

      <div
        className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
