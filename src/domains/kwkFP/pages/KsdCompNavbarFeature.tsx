import { useContext, useEffect, useState } from "react";
import KsdCompNavbar from "../communs/KsdCompNavbar";
import { DataContext } from "../../../utils/SwitchedData";
import KsdCompLanguageButton from "../../../components/buttons/KsdCompLanguageButton";

const KsdCompNavbarFeature = () => {
  // Access to the values setData  that is passed as a value to the provider.
  const {setDataState } = useContext(DataContext);
  //----------------State Language--------------------------------------------------
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );
  //------------------------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  //@Desc-Used to switch language---------------------------------------------------
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
                  if(setDataState) {setDataState("French")}
                }}>
            EN
            </KsdCompLanguageButton>
         
        );
    }
  };
  //-----------------------------------------------------------------------------

  return <KsdCompNavbar language={language} LanguageSwitch={LanguageSwitch} />;
};

export default KsdCompNavbarFeature;
