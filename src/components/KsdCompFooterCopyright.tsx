import React, { HTMLProps, useContext } from "react";
import "../_dist/KsdCompFooterCopyright.css"
import { DataContext } from "../utils/SwitchedData";

interface CopyrightProps extends HTMLProps<HTMLParagraphElement> {
  id?: string;
}
const KsdCompFooterCopyright = ({ ...props }: CopyrightProps) => {
  // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  return (
    <p
      className={`copy-right-footer ${props.className ? props.className : ""}`}>
      {data?.about.copyright}
    </p>
  );
};

export default KsdCompFooterCopyright;
