import React from "react";
import Carousel from "../Carousel/Carousel";

const CarouselContainer = () => {
  const items = [
    "https://image.tmdb.org/t/p/original/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
    "https://image.tmdb.org/t/p/original/6cXqnUlCklzV52kqyn3EEqDonyM.jpg",
  ];
  return <Carousel items={items} />;
};
export default CarouselContainer;
