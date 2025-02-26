import React from "react";
import "../../_dist/KsdCompCardSideIcon.css";

//// Define the props interface for EsdCompCardSideIcon
interface KsdCompCardSideIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction: "left" | "right"; // define wheter the icon will be placed on the left side or the right side
  variant: "organisation" | "global" | "ecosystem" | "benchmarking"; //define witch variant it is
  icon: React.ReactNode; //define the icon used
  children: React.ReactNode; // define the children that must be validated with the child validator
}

const KsdCompCardSideIcon = ({ ...props }: KsdCompCardSideIconProps) => {
  return (
    <div
      {...props}
      className={`card-side-icon-container ${
        props.className ? props.className : ""
      }icon-side-${props.direction} icon-side-${props.variant}`}>
      <figure className="card-side-figure">{props.icon}</figure>
      <div className="side-icon-card-paragraphe">
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default KsdCompCardSideIcon;
