import { Routes, Route } from "react-router-dom";
import BuilderPage from "../pages/BuilderPage";
import FinalPreviewPage from "../pages/FinalPreviewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/preview" element={<FinalPreviewPage />} />
    </Routes>
  );
};

export default AppRoutes;
