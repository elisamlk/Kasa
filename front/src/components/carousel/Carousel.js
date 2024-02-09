import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

const Carousel = (props) => {
  const listPictures = props.pictures;
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

  
  const showChevrons = listPictures.length > 1;

  return (
    <div className="carousel">
      {showChevrons && (
        <FontAwesomeIcon
          className="carousel-btn prev"
          icon={faChevronLeft}
          onClick={goToPrevSlide}
        />
      )}
      <img src={listPictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {showChevrons && (
        <FontAwesomeIcon
          className="carousel-btn next"
          icon={faChevronRight}
          onClick={goToNextSlide}
        />
      )}
      <div className="counter">
        {currentIndex + 1} / {listPictures.length}
      </div>
    </div>
  );
};

export default Carousel;

