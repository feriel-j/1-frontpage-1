import React, { HTMLProps } from "react";
import"../../_dist/KsdCompKwkQuote.css"

interface QuoteProps extends HTMLProps<HTMLHeadingElement> {
  id?: string;
  variant: "red" | "green" | "orange" | "purple";
}

const KsdCompKwkQuote = ({ ...props }: QuoteProps) => {
  return (
    <h1
      {...props}
      className={`quote-title ${props.className ? props.className : ""} quote-${
        props.variant ? props.variant : ""
      } `}>
      {props.children}
    </h1>
  );
};

export default KsdCompKwkQuote;
