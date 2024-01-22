import { UserContext } from "@context/UserContext";
import { useContext } from "react";

export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("must be used within a UserProvider");

  return context;
};
