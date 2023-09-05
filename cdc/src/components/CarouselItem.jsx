import React from "react";
import "./Carousel.css"
export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
     
      <img className="carousel-img" src={item.imag} />
    
    </div>
  );
};
