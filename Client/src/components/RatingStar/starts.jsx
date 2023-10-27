import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./starts.css";

const RatingStars = ({ stars, reviews, onClick }) => {
  console.log(stars, reviews);
  const star = Array.from({ length: 5 }, (_, index) => {
    return (
      <div key={index} onClick={() => onClick(index + 1 )} className="div_star">
        {stars >= index + 1 ? (
          <FaStar className="icon_star" />
        ) : (
          <AiOutlineStar className="icon_star" />
        )}
      </div>
    );
  });

  return (
    <div className="icon_style_star">
      <div onClick={() => onClick(1)}>
        <FaStar/>
      </div>
      {star}
      <p className="p_star">Opiniones: {reviews}</p>
    </div>
  );
};

export default RatingStars;
