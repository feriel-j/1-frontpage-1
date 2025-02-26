import React, { useState } from "react";
import "../../../_dist/KsdCompBurgerMenu.css";

import KsdCompBurgerButton from "../../../components/buttons/KsdCompBurgerButton";
import KsdCompBurgerItemsList from "../../../components/tabs/KsdCompBurgerItemsList";
import KsdCompKwkLogo from "../../../components/icons/KsdCompKwkLogo";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../../../utils/HandleScrollToTop";



// Define the props interface for EsdCompUplayeredContentComponent
interface BurgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  LanguageSwitch: (language: string) => React.ReactNode;
  language: string;
 
}

const KsdCompBurgerMenu = ({
  LanguageSwitch,
  language,
  ...props
}: BurgerMenuProps) => {
  //useNavigate-------------------------------------
  const navigate =useNavigate()
  //state for burger menu--------------------------------------
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
   //-----------------------------------------------------------
  //useScroll to top
  const scrollToTop = useScrollToTop();
  //---------------------------------------------------------
  // @definition: a function used on click of the logo to navigate to the home page and scroll to the top
  const handleClick = () => {
    navigate("/");
    setIsBurgerOpened(false)
    scrollToTop();
  };
//-------------------
  return (
    <>
      <nav
        {...props}
        className={`${
          isBurgerOpened
            ? "burger-menu-container-opened"
            : "burger-menu-container"
        } ${props.className ? props.className : ""}`}>
        <KsdCompBurgerButton
          isBurgerOpened={isBurgerOpened}
          setIsBurgerOpened={setIsBurgerOpened}
        />
        {isBurgerOpened && (
          <div className="burger-menu-content">
            <KsdCompKwkLogo
              className="burger-logo"
             onClick={()=>handleClick()}
            />
            <KsdCompBurgerItemsList setIsBurgerOpened={setIsBurgerOpened} />
          </div>
        )}
        {isBurgerOpened && LanguageSwitch(language)}
      </nav>
      {isBurgerOpened && (
        <div
          className="burger-wrapper"
          onClick={() => setIsBurgerOpened(false)}></div>
      )}
    </>
  );
};

export default KsdCompBurgerMenu;
