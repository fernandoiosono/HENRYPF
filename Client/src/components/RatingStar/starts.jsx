import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./starts.css";

const RatingStars = ({ stars, reviews }) => {
  console.log(stars, reviews);
  const star = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon_star" />
        ) : (
          <AiOutlineStar className="icon_star" />
        )}
      </span>
    );
  });

  return (
    <div className="icon_style_start">
      <FaStar/>
      {star}
      <p className="p_star">Opiniones: {reviews}</p>
    </div>
  );
};

export default RatingStars;
