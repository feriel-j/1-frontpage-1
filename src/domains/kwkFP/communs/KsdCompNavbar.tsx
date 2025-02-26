import React from "react";
import "../../../_dist/KsdCompNavbar.css";

import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../../../utils/HandleScrollToTop";
import KsdCompKwkLogo from "../../../components/icons/KsdCompKwkLogo";
import KsdCompDivider from "../../../components/divider/KsdCompDivider";
import KsdCompNavigationMenu from "../../../components/tabs/KsdCompNavigationMenu";

// Define the props interface for EsdCompNavbar

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  LanguageSwitch: (language: string) => React.ReactNode;
  language: string;
}

const KsdCompNavbar = ({ LanguageSwitch, language, ...props }: NavbarProps) => {
  //-----------------------------------------------------------
  //use navigate---------------------------------------------
  const navigate = useNavigate();
  //useScroll to top
  const scrollToTop = useScrollToTop();
  //---------------------------------------------------------
  // @definition: a function used on click of the logo to navigate to the home page and scroll to the top
  const handleClick = () => {
    navigate("/");
    scrollToTop();
  };
//-------------------
  return (
    <>
      <nav
        {...props}
        className={`navigation-bar ${props.className ? props.className : ""}`}>
        <KsdCompKwkLogo
          onClick={handleClick}
          className="kwk-logo-nav"
         
        />
        {LanguageSwitch(language)}
        <KsdCompNavigationMenu />
      </nav>
      <KsdCompDivider className="navigation-divider" line={"vertical"} />
    </>
  );
};

export default KsdCompNavbar;
