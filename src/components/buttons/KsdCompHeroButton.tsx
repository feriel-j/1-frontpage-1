import React from "react";
import "../../_dist/KsdCompHeroButton.css";
interface NewDocButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
}
const KsdCompHeroButton = ({ ...props }: NewDocButtonProps) => {
  return (
    <button
      {...props}
      className={`hero-button-common hero-button-${
        props.variant ? props.variant : "primary"
      } ${props.className ? props.className : ""}`}
    >
      {props.children}
    </button>
  );
};

export default KsdCompHeroButton;
