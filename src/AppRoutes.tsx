import { Route, Routes } from "react-router-dom";

import ContainerPresentationalPattern from "./pages/ContainerPresentationalPattern";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerPresentationalPattern />} />
    </Routes>
  );
};

export default AppRoutes;
