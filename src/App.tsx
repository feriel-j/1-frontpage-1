import { Route, Routes } from "react-router-dom";
import "./_dist/app.css";
import MainLayout from "./domains/kwkFP/layouts/MainLayout";
import KsdCompBaseComponent from "./domains/kwkFP/pages/KsdCompBaseComponent";
import KsdCompComingSoonComponent from "./domains/kwkFP/pages/KsdCompComingSoonComponent";
import KsdCompRegisterFeature from "./domains/kwkFP/pages/KsdCompRegisterFeature";
import KsdCompContactUsFeature from "./domains/kwkFP/pages/KsdCompContactUsFeature";


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<KsdCompBaseComponent />} />
          <Route path="/magazine" element={<KsdCompComingSoonComponent />} />
          <Route path="/pricing" element={<KsdCompComingSoonComponent />} />
          <Route path="/roadmap" element={<KsdCompComingSoonComponent />} />
          <Route path="/contact" element={<KsdCompContactUsFeature />} />
      <Route path="/register" element={<KsdCompRegisterFeature />} />
      </Route>   
    </Routes>
  </div>

  );
}

export default App;
