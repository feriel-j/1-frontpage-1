import React from "react";
import"../../_dist/KsdCompUnderlinedInput.css"
import KsdCompDivider from "../divider/KsdCompDivider";
interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  id?: string;
}
const KsdCompUnderlinedInput = ({ ...props }: InputProps) => {
  return (
    <div className="underline-input-container">
      <input
        {...props}
        className={
          props.className
            ? `underlined-input ${props.className}`
            : "underlined-input"
        }
        type={props.type}
        placeholder={props.placeholder}
      />
      <KsdCompDivider line="horizontal" className="underlined-input-divider" />
    </div>
  );
};

export default KsdCompUnderlinedInput;
