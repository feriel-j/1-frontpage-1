import React, { useState, useEffect } from "react";
import "../../_dist/KsdCompCaroussel.css";
import KsdCompCarousselDot from "./KsdCompCarousselDot";
import KsdCompCarousselSlide from "./KsdCompCarousselSlide";


/* Props for the EKdCompCaroussel component.*/
interface CarousselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  dots?: boolean;
  interval?: number;
}
/* Carousel component with slide and dot functionality.*/
const EsdCompCaroussel: React.FC<CarousselProps> = ({
  children,
  autoplay = false,
  interval = 7000,
  dots=false,
}) => {
  // Current
  const [currentSlide, setCurrentSlide] = useState(0);

  /*-------------------------------------------
   *Handles the selection of a slide.
   *@param index - The index of the selected slide.
   ----------------------------------------------*/
  const handleChooseSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(childrenCount - 1);
    } else if (index >= childrenCount) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };
  //---------------------------------------------------------

  // get the number of children slides-----------------------
  const childrenCount = React.Children.count(children);
  //----------------------------------------------------
  useEffect(() => {
    let timeoutId: number;
    if (autoplay) {
      timeoutId = window.setTimeout(() => {
        setCurrentSlide(
          currentSlide === childrenCount - 1 ? 0 : currentSlide + 1 //-- Move to the next slide, or wrap to the first slide if at the end.
        );
      }, interval);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId); //---Clear the timout----
      }
    };
  }, [autoplay, currentSlide, childrenCount, interval]);

  const carousselDots = Array.from({ length: childrenCount }).map((_, index) => (
    <KsdCompCarousselDot id={`${dots?"":"dots-hidden"}`}
      key={index}
      isActive={index === currentSlide}
      onClick={() => handleChooseSlide(index)}
    />
  ));
  
  return (
    <div className="carousel-container">
      <div className="slides-container">
        {React.Children.map(children, (child, index) => (
          <KsdCompCarousselSlide
            key={index}
            isActive={index === currentSlide}
            onClick={() => handleChooseSlide(index)}>
            {child}
          </KsdCompCarousselSlide>
        ))}
      </div>
      <div className="dots-container">{carousselDots}</div>
    </div>
  );
};

export default EsdCompCaroussel;
