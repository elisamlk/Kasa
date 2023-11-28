import React from "react";

const Carousel = (props) => {
  const pictures = props.pictures;
  console.log(pictures);
  return (
    <div className="apartment_img">
      {pictures.map((pic) => (
        <img key={pic} src={pic} alt="All Pictures Of Apartment"></img>
      ))}
    </div>
  );
};

export default Carousel;
