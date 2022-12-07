import { Route, Routes } from "react-router-dom";

import ContainerPresentationalPattern from "./pages/ContainerPresentationalPattern";
import HOCPattern from "./pages/HOCPattern";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerPresentationalPattern />} />
      <Route path="/hoc-pattern" element={<HOCPattern />} />
    </Routes>
  );
};

export default AppRoutes;
