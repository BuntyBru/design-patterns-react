import { Route, Routes } from "react-router-dom";

import ContainerPresentationalPattern from "./pages/ContainerPresentationalPattern";
import HOCPattern from "./pages/HOCPattern";
import HooksPattern from "./pages/HooksPattern";
import RenderProps from "./pages/RenderProps";
import CompoundPattern from "./pages/CompoundPattern";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerPresentationalPattern />} />
      <Route path="/hoc-pattern" element={<HOCPattern />} />
      <Route path="/render-props-pattern" element={<RenderProps />} />
      <Route path="/hooks-pattern" element={<HooksPattern />} />
      <Route path="/compound-pattern" element={<CompoundPattern />} />
    </Routes>
  );
};

export default AppRoutes;
