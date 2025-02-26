import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../utils/SwitchedData';
import KsdCompLanguageButton from '../../../components/buttons/KsdCompLanguageButton';
import KsdCompBurgerMenu from '../communs/KsdCompBurgerMenu';

const KsdCompBurgerMenuFeature = () => {
  // Access to the values setData  that is passed as a value to the provider.
    const {setDataState } = useContext(DataContext);

     //----------------State Language-------------------------------------------------
    const [language, setLanguage] = useState(localStorage.getItem('language') || "English");

    //---------UseEffect----------------------------------------------------------------
    useEffect(() => {
      localStorage.setItem('language', language);
    }, [language]);

     //@Desc-Used to switch language----------------------------------------------------
    const LanguageSwitch = (language: string) => {
      switch (language) {
        case "English":
          return (
            <KsdCompLanguageButton className="navigation-bar-language-btn"
              onClick={() => {
                setLanguage("French");
               if(setDataState) {setDataState("French")}
              }}>
              EN
              </KsdCompLanguageButton>
          );
        case "French":
          return (
            <KsdCompLanguageButton className="navigation-bar-language-btn"
              onClick={() => {
                setLanguage("English");
                if(setDataState) {setDataState("English")}
              }}>
            FR
            </KsdCompLanguageButton>
          );
        default:
          return (
            <KsdCompLanguageButton className="navigation-bar-language-btn"
        
              onClick={() => {
                setLanguage("French");
                if(setDataState) {setDataState("English")}
              }}>
          EN
          </KsdCompLanguageButton>
          );
      }
    };
    //---------------------------------------------------------------------------------
    
  return (
    <KsdCompBurgerMenu language={language} LanguageSwitch={LanguageSwitch}/>
  )
}

export default KsdCompBurgerMenuFeature