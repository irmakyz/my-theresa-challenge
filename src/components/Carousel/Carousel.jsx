import React from "react";
import { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button className="carousel__btn carousel__btn--prev carousel__btn--desktop" onClick={prevSlide}>
        &lt;
      </button>
      <img
        src={items[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      ></img>
      <button className="carousel__btn carousel__btn--next carousel__btn--desktop" onClick={nextSlide}>
        &gt;
      </button>
      <div className="carousel__mobile-btn-container">
        <button
          className="carousel__btn carousel__btn--prev carousel__btn--mobile"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="carousel__btn carousel__btn--next carousel__btn--mobile"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Carousel;
