import React, { useContext } from "react";
import "../_dist/KsdCompConnectingComponent.css"
import KsdCompUnderlinedTitle from "./titles/KsdCompUnderlinedTitle";
import KsdCompComposedCardWithButton from "./cards/KsdCompComposedCardWithButton";
import { DataContext } from "../utils/SwitchedData";

interface ConnectingProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

const KsdCompConnectingComponent = ({ ...props }: ConnectingProps) => {
    // Access to the values data that is passed as a value to the provider.
    const { data } = useContext(DataContext);
    //------------------------------------------------------------------
  return (
    <section
      {...props}
      className={`connecting-container ${
        props.className ? props.className : ""
      }`}>
        <KsdCompUnderlinedTitle variant="left-sided">{data?.connecting.title}</KsdCompUnderlinedTitle>
        <KsdCompComposedCardWithButton/>
      </section>
  );
};

export default KsdCompConnectingComponent;
