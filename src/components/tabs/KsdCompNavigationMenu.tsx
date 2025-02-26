import React, { useContext} from "react";
import "../../_dist/KsdCompNavigationMenu.css";
import { useLocation, useNavigate } from "react-router-dom";
import KsdCompDivider from "../divider/KsdCompDivider";
import { DataContext } from "../../utils/SwitchedData";

// Define the props interface for EsdCompNavigationMenu
interface EsdCompNavigationTabsProps
  extends React.HTMLAttributes<HTMLUListElement> {
  id?: string;
}

const EsdCompNavigationMenu = ({ ...props }: EsdCompNavigationTabsProps) => {
  //Used for navigate-------------
  const navigate = useNavigate();
  //---------------------------------------------------------

  // Access to the values data  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------------------
  const location = useLocation() // used to get the path ;
  //---------------------------------------------------------------------
  return (
    <>
      <ul
        {...props}
        className={`navigation-menu-list ${
          props.className ? props.className : ""
        }`}>
        <KsdCompDivider
           id={location.pathname === "/magazine" ? "selected-divider" : ""}
          className="divider-menu"
          line="horizontal"
        />
        <li
          id={location.pathname === "/magazine" ? "selected-item" : ""}
          onClick={() => {
            navigate("/magazine");
          }}>
          {data?.navBar.Magazine}
        </li>
        <KsdCompDivider
          id={location.pathname === "/pricing" ? "selected-divider" : ""}
          className="divider-menu"
          line="horizontal"
        />
        <li
          id={location.pathname === "/pricing" ? "selected-item" : ""}
          onClick={() => {
            navigate("/pricing");
          }}>
          {data?.navBar.Pricing}
        </li>
        <KsdCompDivider
          id={location.pathname === "/roadmap" ? "selected-divider" : ""}
          className="divider-menu"
          line="horizontal"
        />
        <li
          id={location.pathname === "/roadmap" ? "selected-item" : ""}
          onClick={() => {
            navigate("/roadmap");
          }}>
          {data?.navBar.Roadmap}
        </li>
        <KsdCompDivider
          id={location.pathname === "/contact" ? "selected-divider" : ""}
          className="divider-menu"
          line="horizontal"
        />
        <li
          id={location.pathname === "/contact" ? "selected-item" : ""}
          onClick={() => {
           
            navigate("/contact");
          }}>
          {data?.navBar.contact}
        </li>
        <KsdCompDivider
          id={location.pathname === "/register" ? "selected-divider" : ""}
          className="divider-menu"
          line="horizontal"
        />
        <li
          id={location.pathname === "/register"?"selected-item" : ""}
          onClick={() => {
            navigate("/register");
          }}>
          {data?.navBar.register}
        </li>
      </ul>
    </>
  );
};

export default EsdCompNavigationMenu;
