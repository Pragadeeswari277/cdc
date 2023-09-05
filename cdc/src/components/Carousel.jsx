import React,{useState} from "react";
import { CarouselItem } from "./CarouselItem";
 import "./Tab.css"
import G_child from "./Gallery/G_child.jpeg";
import G_girl from "./Gallery/G_girl.jpeg"; 
import G_men from "./Gallery/G_men.jpeg";
import G_old from "./Gallery/G_old.jpeg";
import "./Carousel.css"
export const Carousel = () => {
    const [activeIndex, setActiveIndex]=useState(0);
  const items = [
    {
      about: "ONE",
      imag: G_girl,
    },
    {
      about: "TWO",
      imag: G_child,
    },
    {
      about: "THREE",
      imag: G_men,
    },
    {
      about: "FOUR",
      imag: G_old,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="container carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};