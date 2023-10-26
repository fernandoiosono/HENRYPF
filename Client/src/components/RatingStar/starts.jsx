import React from "react";
import { Fastar } from "react-icons/fa";
import { AiOutLineStar } from "react-icons/ai";
import './starts.css';

const RatingStars = ({ starts, reviews}) => {
  const start = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>
        {starts >= index + 1 ? (
          <Fastar className="iconAll" />
        ) : (
          <AiOutLineStar className="iconAlone" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
        <div className="icon_style_start">
          {start}
          <p>Opiniones: {reviews}</p>
        </div>
    </Wrapper>
  )
};

export default RatingStars;
