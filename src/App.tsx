import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { queryClient } from "./api/react-query";
import { UserProvider } from "./context/UserContext";
import Routes from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
