import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

const Carousel = (props) => {
  const pictures = props;
  const listPictures = props.pictures;
  console.log("1=>", pictures);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listPictures.length - 1 : prevIndex - 1
    );
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listPictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  // console.log(pictures);
  return (
    <div className="carousel">
      <FontAwesomeIcon
        className="carousel-btn prev"
        icon={faChevronLeft}
        onClick={goToPrevSlide}
      />
      <img src={listPictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <FontAwesomeIcon
        className="carousel-btn next"
        icon={faChevronRight}
        onClick={goToNextSlide}
      />
    </div>
  );
};
export default Carousel;
