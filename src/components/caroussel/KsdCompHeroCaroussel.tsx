import React from "react";
import KsdCompCaroussel from "./KsdCompCaroussel";
import KsdCompCarousselItem from "./KsdCompCarousselItem";

const KsdCompHeroCaroussel = () => {
  
  return (
    <>
      <KsdCompCaroussel autoplay={true}>
        <KsdCompCarousselItem variant={"first"} />
        <KsdCompCarousselItem variant={"second"} />
        <KsdCompCarousselItem variant={"third"} />
        <KsdCompCarousselItem variant={"fourth"} />
      </KsdCompCaroussel>{" "}
    </>
  );
};

export default KsdCompHeroCaroussel;
