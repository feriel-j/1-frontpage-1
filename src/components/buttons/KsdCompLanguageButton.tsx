import React from "react";
import "../../_dist/KsdCompLanguageButton.css";
import KsdCompLanguageIcon from "../icons/KsdCompLanguageIcon";

interface NewDocButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
}

const KsdCompLanguageButton = ({ ...props }: NewDocButtonProps) => {
  
  return (
    <button
      {...props}
      className={`button-language ${props.className ? props.className : ""}`}
    >
      <KsdCompLanguageIcon className="button-language-icon" />
       <span>:</span>
      <span>{props.children}</span>
    </button>
  );
};

export default KsdCompLanguageButton;
