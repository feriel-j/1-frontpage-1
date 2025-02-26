import React from "react";
import "../../_dist/KsdCompCheckbox.css";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
const KsdCompCheckbox = ({ ...props }: CheckboxProps) => {
  return (
    <label
      className={`checkbox-input ${props.className ? props.className : ""}`}
    >
      <input type="checkbox" {...props} />
      {props.label}
    </label>
  );
};

export default KsdCompCheckbox;
