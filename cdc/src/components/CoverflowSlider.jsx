import React, { useState } from "react";
import "./CoverflowSlider.css";

const slidesData = [
  {
    id:1,
    content: "slide1",
    image: "General.jpg"
  },
  {
    id:2,
    content: "slide2",
    image: "Geriatric.jpg"
  },
  {
    id:3,
    content: "slide3",
    image: "Mole.jpg"
  },
  {
    
      id:4,
      content: "slide4",
      image: "Nail.jpg"
    
  },{
    id:5,
    content: "slide5",
    image: "Pediatric.jpg"
  },
  {
    id:6,
    content: "slide6",
    image: "wart.jpg"
  },
  {
    
    id:7,
    content: "slide4",
    image: "Hair.jpg"
  
},{
  id:8,
  content: "slide5",
  image: "Medical.jpg"
},
{
  id:9,
  content: "slide6",
  image: "Cyrotheraphy.jpg"
},
];
 
const colors = ["#0088FE", "#00C49F", "#FFBB28","#0088FE", "#00C49F", "#FFBB28","#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    
    <div className="slideshow" style={{justifyContent:"center",alignItems:"center"}}>
      
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slidesData.map((item, index) => (
          <div
            className="slide"
            key={index}
           
           
          >

            <img className="img" src={item.image}/>
          </div>
        ))}
      </div>

      <div className="slideshowDots horizontal-scroll-view">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
   
  );
}

export default Slideshow;