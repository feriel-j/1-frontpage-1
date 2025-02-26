import React, { createContext, useRef } from "react";
import "../../../_dist/MainLayout.css";
import { Outlet } from "react-router-dom";
import KsdCompNavbarFeature from "../pages/KsdCompNavbarFeature";
import { SwitchedData } from "../../../utils/SwitchedData";
import KsdCompBurgerMenuFeature from "../pages/KsdCompBurgerMenuFeature";
 
// Create the refContext using createContext for the to scroll to top
export const refContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

const MainLayout = () => {
  
  const myTopRef = useRef<HTMLElement>(null); // Define the ref for the top scroll

  return (
    <refContext.Provider value={myTopRef}>
      <SwitchedData>
     <section className="layout-fp-kwk">
      <aside className="layout-navbar"><KsdCompNavbarFeature/> </aside>
      <aside className="layout-burger">
        <KsdCompBurgerMenuFeature/>
      </aside>
      <main className="layout-main">
        <Outlet />
      </main>
    </section>
    </SwitchedData>
    </refContext.Provider>
  );
};

export default MainLayout;
