import React, { useContext } from "react";

import "../../_dist/KsdCompCarousselItem.css";
import { DataContext } from "../../utils/SwitchedData";
import KsdCompHeroButton from "../buttons/KsdCompHeroButton";
import { useNavigate } from "react-router-dom";

interface CarousselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "first" | "second" | "third" | "fourth";
}

const KsdCompCarousselItem = ({ ...props }: CarousselItemProps) => {
  // UseNavigate hook
  const navigate=useNavigate()
   // Access to the values setData  that is passed as a value to the provider.
 const {data } = useContext(DataContext);
 //--------------------------------------------------------------
  //switch case for the content of the caroussel items-----------
  const contentSwitch = (variant: string) => {
    switch (variant) {
      case "first": // firt case if the variant is "ala-bahri"--------------------------//
        return (
          <figure
            className="carousel-view"
            title="Photo By Jeremy Bishop on Unsplash">
            <img
              className="first-img"
              src="../images/jeremy.jpg"
              alt="Jeremy-Bishop"
            />
            <figcaption>Photo By Jeremy Bishop on Unsplash</figcaption>
          </figure>
        );
      case "second": // firt case if the variant is "khalil-bhy"--------------------------//
        return (
          <figure
            className="carousel-view"
            title="Photo By Jamie Street on Unsplash">
            {" "}
            <img
              className="second-img"
              src="../images/jamie-street.jpg"
              alt="Jamie-Street"
            />
            <figcaption>Photo By Jamie Street on Unsplash</figcaption>
          </figure>
        );
      case "third": // firt case if the variant is "fadwa-gmiden"--------------------------//
        return (
          <figure
            className="carousel-view"
            title="Photo By Pat Whelen on Unsplash">
            <img src="../images/pat-whelen.jpg" alt="Pat-Whelen" />
            <figcaption>Photo By Pat Whelen on Unsplash</figcaption>
          </figure>
        );
      case "fourth": // firt case if the variant is "aymen-chatti"--------------------------//
        return (
          <figure
            className="carousel-view"
            title="Photo By Pat Whelen on Unsplash">
            <img src="../images/pat-whelen.jpg" alt="Pat-Whelen" />
            <figcaption>Photo By Pat Whelen on Unsplash</figcaption>
          </figure>
        );
      default:
        break;
    }
  };
  
  return (
    <div {...props} className="hero-caroussel-container">
      {contentSwitch(props.variant)}
      <div className="overlay-carousel">
        <div className="carousel-titles">
          {" "}
          <h1 className="main-header-kwk">{data?.carousel.h1}</h1>
          <h2>{data?.carousel.h2}</h2>
        </div>
        <h3>
        {data?.carousel.h3}
        </h3>
        <KsdCompHeroButton className="singup-btn" onClick={()=>navigate("/register")}>{data?.navBar.register}</KsdCompHeroButton>
      </div>
    </div>
  );
};

export default KsdCompCarousselItem;
