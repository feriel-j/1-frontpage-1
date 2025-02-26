import React, { useContext } from "react";
import "../../_dist/KsdCompComposedCardWithButton.css";
import KsdCompHeroButton from "../buttons/KsdCompHeroButton";
import { DataContext } from "../../utils/SwitchedData";
import { useNavigate } from "react-router";


// Define the props interface for ComposedCardWithButton

interface ComposedCardWithButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

const KsdCompComposedCardWithButton = ({
  ...props
}: ComposedCardWithButtonProps) => {
  //define useNavigate hook ---------------------------
  const navigate =useNavigate()
    // Access to the values data  that is passed as a value to the provider.
    const {data} = useContext(DataContext);
    //---------------------------------------------------------------------
  return (
    <div
      {...props}
      className={`composed-card-with-button-container ${
        props.className ? props.className : ""
      }`} title="Photo by Joshua Earle in unsplash">
      <div className="composed-card-with-button-overlay">
        <div className="composed-card-with-button-description">
          <h1>{data?.connecting.header}</h1>
          <p>
          {data?.connecting.paragraphe}
          </p>
        </div>
        <KsdCompHeroButton className="composed-card-with-button-btn" variant="secondary" onClick={()=>navigate("/contact")} >{data?.connecting.text_button}</KsdCompHeroButton>
      </div>
    </div>
  );
};

export default KsdCompComposedCardWithButton;
