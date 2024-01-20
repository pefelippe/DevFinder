import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import SearchGithubUsers from "./pages/SearchGithubUsers";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/" element={<SearchGithubUsers />} />
      <Route path="*" element={<Navigate to="/" />} />
    </AppRoutes>
  );
}

export default Routes;
