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

const CoverflowSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fi,setfi]=useState(0);
  const [la,setla]=useState(2);
//fi - first image and  la - last image
  const nextSlide = () => {
    console.log("Next Slide Clicked"); 
    setActiveIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    ); 
   
   setla(
   la==slidesData.length - 1 ? 2 : la + 1
   );
   setfi(fi==slidesData.length - 1||la==slidesData.length - 1?0:fi+1);
  };

  const prevSlide = () => {
    console.log("Prev Slide Clicked"); 
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
    
   setfi(fi==0?slidesData.length - 3:fi-1)
   setla(fi==0||la==2?slidesData.length - 1:la-1)
   
  };

  return (
    <div className="coverflow-container">
      <button onClick={fi>0?prevSlide:null}  disabled={fi==0?true:false}   className="slider-button">
      ❮
      </button>
      <div className="slider">
        {slidesData.map((slide, index) => (
          <div
            key={index}
          >
            {
        index>=fi&&index<=la&&
       <img className="photo" src={slide.image}  />
    } 

          </div>
        ))}
      </div>
      <button onClick={la<slidesData.length-1?nextSlide:null} disabled={la==slidesData.length-1?true:false}    className="slider-button" >
      ❯
      </button>
    </div>
  );
};

export default CoverflowSlider;