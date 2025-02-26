import React, { useContext, useRef } from "react";
import "../../../_dist/KsdCompBaseComponent.css";
import ExecuteScrollComponent from "../../../utils/ExecuteScrollComponent";
import { refContext } from "../layouts/MainLayout";
import KsdCompHeroCaroussel from "../../../components/caroussel/KsdCompHeroCaroussel";
import KsdCompKwkQuote from "../../../components/titles/KsdCompKwkQuote";
import { DataContext } from "../../../utils/SwitchedData";
import KsdCompAboutUs from "../../../components/KsdCompAboutUs";
import KsdCompKorewakore from "../../../components/KsdCompKorewakore";
import KsdCompSdgsComponent from "../../../components/KsdCompSdgsComponent";
import KsdCompConnectingComponent from "../../../components/KsdCompConnectingComponent";
import KsdCompQuestionsFeatureComponent from "../../../components/KsdCompQuestionsFeatureComponent";
import KsdCompOrganisationComponent from "../../../components/KsdCompOrganisationComponent";
import KsdCompResolutionComponent from "../../../components/KsdCompResolutionComponent";



const KsdCompBaseComponent = () => {
  // Create a reference using the useRef hook--------------------------------
  const myRef = useRef<HTMLElement>(null);

  const myTopRef = useContext(refContext);

  // Access to the values data  that is passed as a value to the provider.
  const { data } = useContext(DataContext);
  return (
    <>
      <section ref={myTopRef||myRef} className="base-component-container">
        <KsdCompHeroCaroussel />
        <KsdCompKwkQuote variant="green">{data?.quote_1}</KsdCompKwkQuote>
        <KsdCompKorewakore />
        <KsdCompKwkQuote variant="orange">{data?.quote_2}</KsdCompKwkQuote>
        <KsdCompOrganisationComponent />
        <KsdCompKwkQuote variant="red">{data?.quote_3}</KsdCompKwkQuote>
        <KsdCompResolutionComponent/>
        <KsdCompKwkQuote variant="purple">{data?.quote_4}</KsdCompKwkQuote>
        <KsdCompQuestionsFeatureComponent  variant="para-question-one"/>
        <KsdCompKwkQuote variant="purple">{data?.quote_5}</KsdCompKwkQuote>
        <KsdCompQuestionsFeatureComponent  variant="para-question-two"/>
        <KsdCompKwkQuote variant="purple">{data?.quote_6}</KsdCompKwkQuote>
        <KsdCompSdgsComponent />
        <KsdCompKwkQuote variant="orange">{data?.quote_7}</KsdCompKwkQuote>
        <KsdCompConnectingComponent />
        <KsdCompKwkQuote variant={"green"}>{data?.quote_8}</KsdCompKwkQuote>
        <KsdCompAboutUs />
      </section>
      <ExecuteScrollComponent scrollRef={myRef} />
    </>
  );
};

export default KsdCompBaseComponent;
