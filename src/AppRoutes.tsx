import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Hello</p>} />
    </Routes>
  );
};

export default AppRoutes;
