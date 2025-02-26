import React, { useContext } from "react";
import "../../_dist/KsdCompDescriptiveCard.css"
import KsdCompUnderlinedTitle from "../titles/KsdCompUnderlinedTitle";
import { DataContext } from "../../utils/SwitchedData";

interface DescriptiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

const KsdCompDescriptiveCard = ({ ...props }: DescriptiveCardProps) => {
      // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);

  //---------------------------------------------------------------------
  return (
    <div
      {...props}
      className={`descriptive-card-container ${
        props.className ? props.className : ""
      }`}>
      <KsdCompUnderlinedTitle variant="centred">
        {data?.organisation.title}
      </KsdCompUnderlinedTitle>
      <div className="descriptive-content">
      <h2>{data?.organisation.header1}</h2>
      <p>
        {data?.organisation.p1}
      </p>
      <h2>{data?.organisation.header2}</h2>
      <p>
       {data?.organisation.p2}
      </p>
      </div>
    </div>
  );
};

export default KsdCompDescriptiveCard;
