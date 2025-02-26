import React, { forwardRef, useContext } from "react";
import { DataContext } from "../utils/SwitchedData";
import "../_dist/KsdCompAboutUs.css";
import KsdCompUnderlinedTitle from "./titles/KsdCompUnderlinedTitle";
import KsdCompFooterCopyright from "./KsdCompFooterCopyright";
import KsdCompContactDetails from "./KsdCompContactDetails";

interface AboutUsProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLElement>;
}

const KsdCompAboutUs = forwardRef<HTMLElement, AboutUsProps>((props, ref) => {
  // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  return (
    <footer
      ref={ref}
      {...props}
      className={`about-us-container ${props.className ? props.className : ""}`}
    >
      <KsdCompUnderlinedTitle variant="left-sided">
        {data?.about.title}
      </KsdCompUnderlinedTitle>

      <p >{data?.about.paragraphe}</p>
      <KsdCompContactDetails />
      <KsdCompFooterCopyright className="footer-paragraphe">{data?.about.copyright}</KsdCompFooterCopyright>
    </footer>
  );
});
KsdCompAboutUs.displayName = "EsdCompAboutUs";

export default KsdCompAboutUs;
