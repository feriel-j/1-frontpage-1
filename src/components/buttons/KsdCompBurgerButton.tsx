import React from "react";
import "../../_dist/KsdCompBurgerButton.css";

interface PropsBurgerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBurgerOpened: boolean;
  setIsBurgerOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const KsdCompBurgerButton = ({
  setIsBurgerOpened,
  isBurgerOpened,
  ...props
}: PropsBurgerProps) => {
  return (
    <button
      {...props}
      className={`${
        isBurgerOpened ? "burger-btn-container-opened" : "burger-btn-container"} ${props.className ? props.className :""}`}
      onClick={(event) => {
        props.onClick && props.onClick(event);
        setIsBurgerOpened(!isBurgerOpened);
      }}>
      <span className={isBurgerOpened ? "bar-1" : "bar"}></span>
      <span className={isBurgerOpened ? "bar-2" : "bar"}></span>
      <span className={isBurgerOpened ? "bar-3" : "bar"}></span>
    </button>
  );
};

export default KsdCompBurgerButton;
