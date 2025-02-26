import React, { useContext } from "react";
import KsdCompComposedCard from "./cards/KsdCompComposedCard";
import "../_dist/KsdCompSdgsComponent.css";
import KsdCompUnderlinedTitle from "./titles/KsdCompUnderlinedTitle";
import { DataContext } from "../utils/SwitchedData";

interface SdgsProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}
const KsdCompSdgsComponent = ({ ...props }: SdgsProps) => {
      // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------------------
  return (
    <section
      {...props}
      className={`sdgs-container ${props.className ? props.className : ""}`}>
      <KsdCompUnderlinedTitle variant="left-sided">{data?.sdgs.title}</KsdCompUnderlinedTitle>
      <div className="sgds-cards">
      <KsdCompComposedCard
        className="economic-growth"
        variant="sdgs"
        copyright="Dan Gold">
        <h1>{data?.sdgs.header1}</h1>
      </KsdCompComposedCard>
      <KsdCompComposedCard
        className="inequality"
        variant="sdgs"
        copyright="Elena Mozhvilo">
        <h1>{data?.sdgs.header2}</h1>
      </KsdCompComposedCard>
      <KsdCompComposedCard
        className="communities"
        variant="sdgs"
        copyright="Eugene Golovesov">
        <h1>{data?.sdgs.header3}</h1>
      </KsdCompComposedCard>
      <KsdCompComposedCard
        className="goals"
        variant="sdgs"
        copyright="Jordan Wozniak">
        <h1>{data?.sdgs.header4}</h1>
      </KsdCompComposedCard>
      </div>
    </section>
  );
};

export default KsdCompSdgsComponent;
