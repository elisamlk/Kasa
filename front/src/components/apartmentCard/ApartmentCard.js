import React from "react";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

const ApartmentCard = (props) => {
  console.log(props.id);
  return (
    <Link to={`/apartmentPage/${props.id}`}>
      <div className="apartment-card">
        <img
          className="apartment-card-img"
          src={props.cover}
          alt={props.description}
        />
        <h3 className="apartment-card-title">{props.title}</h3>
      </div>
    </Link>
  );
};

export default ApartmentCard;
