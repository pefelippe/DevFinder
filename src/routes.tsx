import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </AppRoutes>
  );
}

export default Routes;
