import { Route, Routes } from "react-router-dom";

import ContainerPresentationalPattern from "./pages/ContainerPresentationalPattern";
import HOCPattern from "./pages/HOCPattern";
import RenderProps from "./pages/RenderProps";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerPresentationalPattern />} />
      <Route path="/hoc-pattern" element={<HOCPattern />} />
      <Route path="/render-props-pattern" element={<RenderProps />} />
    </Routes>
  );
};

export default AppRoutes;
