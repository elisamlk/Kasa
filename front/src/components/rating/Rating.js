import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import "./Rating.scss";

const Rating = (props) => {
  const rating = props.rating;
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="#ff6060" />);
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon key="half" icon={faStarHalfAlt} color="#ff6060" />
    );
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${i}`}
        icon={faStarOutline}
        color="#d3d3d3"
      />
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
