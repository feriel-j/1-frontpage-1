import React, { useContext } from "react";
import "../_dist/KsdCompComingSoon.css";
import KsdCompKwkLogo from "./icons/KsdCompKwkLogo";
import KsdCompHeroButton from "./buttons/KsdCompHeroButton";
import KsdCompContactDetails from "./KsdCompContactDetails";
import KsdCompFooterCopyright from "./KsdCompFooterCopyright";
import { DataContext } from "../utils/SwitchedData";
import { useNavigate } from "react-router-dom";
interface ComingSoonProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}
const KsdCompComingSoon = ({ ...props }: ComingSoonProps) => {
  //define useNavigate hook--------------------
  const navigate= useNavigate()
  // Access to the values data  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------------------
  return (
    <section
      {...props}
      title="Unsplash Codioful (Formerly Gradienta)"
      className={`coming-soon-container ${
        props.className ? props.className : ""
      }`}
    >
      <div className="coming-soon-content">
        <figure>
        <KsdCompKwkLogo className="kwk-logo-coming-soon" />
        </figure>
        <h1>{data?.coming_soon.title}</h1>
        <h3>
          {data?.coming_soon.description}
        </h3>
        <KsdCompHeroButton className="coming-soon-btn" onClick={()=>navigate("/register")}>{data?.coming_soon.coming_btn}</KsdCompHeroButton>
        <KsdCompContactDetails className="coming-soon-contact" />
      </div>
      <KsdCompFooterCopyright className="coming-soon-footer" />
    </section>
  );
};

export default KsdCompComingSoon;
