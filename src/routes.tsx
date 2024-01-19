import { Route, Routes as AppRoutes } from "react-router-dom";
import Searcher from "./pages/Searcher";

function Routes() {
  return (
    <AppRoutes>
      <Route path="/" element={<Searcher />} />
    </AppRoutes>
  );
}

export default Routes;
