import React from "react";
import "../../_dist/KsdCompComposedCard.css";

// Define the props interface for EsdCompComposedCard

interface KsdCompComposedCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant: "kwk" | "sdgs";
  copyright: string;
}

const KsdCompComposedCard = ({ ...props }: KsdCompComposedCardProps) => {
  return (
    <section
      {...props}
      className={`composed-card-container composed-card-container-${
        props.variant
      }  ${props.className ? props.className : ""}`}
      title={`Photo by ${props.copyright ? props.copyright : ""} in unsplash`}>
      <div className="overlay-container-composed-card">
          {props.children}
      </div>
    </section>
  );
};

export default KsdCompComposedCard;
