import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/react-query";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
