import React from "react";
import "../_dist/KsdCompContactLink.css";

//// Define the props interface for EsdCompCardSideIcon
interface ContactLinkIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode; //define the icon used
  children: React.ReactNode; // define the children that must be validated with the child validator
}
const KsdCompContactLink = ({ ...props }: ContactLinkIconProps) => {
  return (
    <div
      {...props}
      className={`contact-link-container ${
        props.className ? props.className : ""
      }`}>
      {props.icon}
      <p>{props.children}</p>
    </div>
  );
};

export default KsdCompContactLink;
