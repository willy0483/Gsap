import { Routes, Route } from "react-router-dom";

import { HomePage } from "../Pages/HomePage/Homepage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
