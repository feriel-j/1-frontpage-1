import React, { useContext } from "react";
import "../../_dist/KsdCompBurgerItemsList.css";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../utils/SwitchedData";

// Define the props interface for EsdCompBurgerItemsList
interface BurgerItemsListProps extends React.HTMLAttributes<HTMLUListElement> {
  id?: string;
  setIsBurgerOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const EsdCompBurgerItemsList = ({
  setIsBurgerOpened,
  ...props
}: BurgerItemsListProps) => {
  //Used for navigate-------------
  const navigate = useNavigate();
  //---------------------------------------------------------
  // Access to the values data  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------
  /* 
 @definition: a function used on click  to navigate
  to the sign ip page 
@async function: the use of async is for navigate  to the sign in page

  */
  const handleClick = async () => {
    await navigate("/register");
    setIsBurgerOpened(false);
  };

  //---------------------------------------------------------------------
  const location = useLocation() // used to get the path ;
  //---------------------------------------------------------------------

  return (
    <ul
      {...props}
      className={`burger-items-list ${props.className ? props.className : ""}`}>
      <li id={location.pathname==="/magazine"?"selected-item":""}
        onClick={() => {
          navigate("/magazine");setIsBurgerOpened(false);
        }}>
       {data?.navBar.Magazine}
      </li>
      <li id={location.pathname==="/pricing"?"selected-item":""}
        onClick={() => {
          navigate("/pricing"); setIsBurgerOpened(false);
        }}>
       {data?.navBar. Pricing}
      </li>
      <li  id={location.pathname==="/roadmap"?"selected-item":""}
        onClick={() => {
          navigate("/roadmap"); setIsBurgerOpened(false);
        }}>
       {data?.navBar.Roadmap}
      </li>
      <li id={location.pathname==="/contact"?"selected-item":""}
        onClick={() => {
          navigate("/contact"); setIsBurgerOpened(false);
        }}>
        {" "}
        {data?.navBar.contact}
      </li>
      <li id={location.pathname==="/register"?"selected-item":""} onClick={handleClick}>{data?.navBar.register}</li>
    </ul>
  );
};

export default EsdCompBurgerItemsList;
