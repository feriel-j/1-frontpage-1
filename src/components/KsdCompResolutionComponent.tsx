import React, { useContext } from "react";
import "../_dist/KsdCompResolutionComponent.css";
import KsdCompUnderlinedTitle from "./titles/KsdCompUnderlinedTitle";
import KsdCompCardSideIcon from "./cards/KsdCompCardSideIcon";
import KsdCompOrganisationIcon from "./icons/KsdCompOrganisationIcon";
import KsdCompGlobeIcon from "./icons/KsdCompGlobeIcon";
import KsdCompBenchmarkingIcon from "./icons/KsdCompBenchmarkingIcon";
import KsdCompEcosystemIcon from "./icons/KsdCompEcosystemIcon";
import { DataContext } from "../utils/SwitchedData";
interface ResolutionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}
const KsdCompResolutionComponent = ({ ...props }: ResolutionProps) => {
        // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------------------
  return (
    <section
      {...props}
      className={`resolution-container ${
        props.className ? props.className : ""
      }`}
    >
      <KsdCompUnderlinedTitle variant="centred">
       {data?.resolution?.title}
      </KsdCompUnderlinedTitle>
      <div className="resolution-content">
        <KsdCompCardSideIcon
          variant="organisation"
          direction="left"
          icon={<KsdCompOrganisationIcon />}
        >
          <p>
          {data?.resolution?.p_1?.part_1}
            <span>{data?.resolution?.p_1?.span_1}</span>{data?.resolution?.p_1?.part_2}
          </p>
        </KsdCompCardSideIcon>
        <KsdCompCardSideIcon
          variant="global"
          direction="right"
          icon={<KsdCompGlobeIcon />}
        >
          <p>
          {data?.resolution?.p_2?.part_1}<span>{data?.resolution?.p_2?.span_1}</span>{data?.resolution?.p_2?.part_2}
            <span>{data?.resolution?.p_2?.span_2}</span>{data?.resolution?.p_2?.part_3}
          </p>
        </KsdCompCardSideIcon>
        <KsdCompCardSideIcon
          variant="ecosystem"
          direction="left"
          icon={<KsdCompEcosystemIcon />}
        >
          <p>
          {data?.resolution?.p_3?.part_1}<span>{data?.resolution?.p_3?.span_1}</span>{data?.resolution?.p_3?.part_2}
            <span>{data?.resolution?.p_3?.span_2}</span>{data?.resolution?.p_3?.part_3}
          </p>
        </KsdCompCardSideIcon>
        <KsdCompCardSideIcon
          variant="benchmarking"
          direction="right"
          icon={<KsdCompBenchmarkingIcon />}
        >
          <p>
          {data?.resolution?.p_4?.part_1}<span>{data?.resolution?.p_4?.span_1}</span>{data?.resolution?.p_4?.part_2}
          </p>
        </KsdCompCardSideIcon>
      </div>
    </section>
  );
};

export default KsdCompResolutionComponent;
