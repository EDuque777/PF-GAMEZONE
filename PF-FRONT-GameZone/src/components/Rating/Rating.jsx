import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const rating = 4; // Rating hardcodeado

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="white" />);
      } else {
        stars.push(<FaStar key={i} color="gray" />);
      }
    }
    return stars;
  };

  return <div style={{ display: "flex" }}>{renderStars()}</div>;
};

export default Rating;

