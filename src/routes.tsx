import { Route, Routes as AppRoutes } from "react-router-dom";
import SearchGithubUsers from "./pages/SearchGithubUsers";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/" element={<SearchGithubUsers />} />
    </AppRoutes>
  );
}

export default Routes;
