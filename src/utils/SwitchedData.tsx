import React, {ReactNode, useEffect, useState } from 'react';
import { dataEN } from '../../src/data/EnglishData';
import { dataFR } from '../../src/data/FrenchData';
//--------------
interface DataContextType {
  data?: typeof dataEN | typeof dataFR;
  setDataState?: React.Dispatch<React.SetStateAction<string>> | undefined;
  children?:ReactNode
}
export const DataContext = React.createContext<DataContextType>({});

export const SwitchedData: React.FC<DataContextType> = ({children}) => {
   // Logic to switch data based on the language 
  const [dataState, setDataState] = useState(localStorage.getItem('language') || "English");
    useEffect(() => {
      localStorage.setItem('language', dataState);
    }, [dataState]);
    //@-Descripion-Function Used that Return the appropriate data object
    const SwitchData=(data:string)=>{
        switch (data) {
          case "English":
            return(dataEN);
          case "French":
            return(dataFR);
          default:
            return(dataEN);
        }
      }
      const data=SwitchData(dataState);
      
  return (
    <DataContext.Provider value={{data,setDataState}}>
      {children}
    </DataContext.Provider>
  );
};
