import React, { useContext } from "react";
import "../_dist/KsdCompKorewakore.css";
import KsdCompComposedCard from "./cards/KsdCompComposedCard";
import { DataContext } from "../utils/SwitchedData";

interface KorewakoreProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}
const KsdCompKorewakore = ({ ...props }: KorewakoreProps) => {
  // Access to the values data that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  //---------------------------------------------------------------------
  return (
    <section
      {...props}
      className={`korewakore-card-container ${
        props.className ? props.className : ""
      }`}>
      <KsdCompComposedCard variant="kwk" copyright="Atul Vinayak">
        <h3>{data?.kwk_description.title}</h3>
        <h4>
          {data?.kwk_description.paragraphe1.part1}{" "}
          <span>{data?.kwk_description.paragraphe1.span}</span>{" "}
          {data?.kwk_description.paragraphe1.part2}
        </h4>
        <h4>
          {data?.kwk_description.paragraphe2.part1} <span>{data?.kwk_description.paragraphe2.span}</span>{" "}
         {data?.kwk_description.paragraphe2.part2}
        </h4>
      </KsdCompComposedCard>
    </section>
  );
};

export default KsdCompKorewakore;
