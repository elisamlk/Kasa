import React from "react";
import "./ApartmentTitle.scss";

const ApartmentTitle = (props) => {
  return (
    <div className="apartment-title">
      <h2>{props.title}</h2>
      <h3>{props.location}</h3>
    </div>
  );
};

export default ApartmentTitle;
