import React, { HTMLProps } from "react";
import "../../_dist/KsdCompUnderlinedTitle.css";
import KsdCompDivider from "../divider/KsdCompDivider";

interface UnderlinedTitleProps extends HTMLProps<HTMLHeadingElement> {
  id?: string;
  variant:"centred"|"left-sided"|"textarea"
}

const KsdCompUnderlinedTitle = ({...props}: UnderlinedTitleProps) => {
  return (
    <h1
      {...props}
      className={`underline-title ${props.className ? props.className : ""} title-${props.variant} `}>
      {props.children}
      <KsdCompDivider line="horizontal" className="underline-title-divider" />
    </h1>
  );
};

export default KsdCompUnderlinedTitle;
