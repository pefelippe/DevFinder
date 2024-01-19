import { ReactNode, createContext, useContext, useState } from "react";
import { getUserData } from "../api/getUserData";
import { UserData } from "../interfaces/userData";

interface UserContextType {
  userData: UserData | null;
  updateUserData: (username: string) => void;
}

const UserContext = createContext({} as UserContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export function UserProvider({ children }: TransactionProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  const updateUserData = async (username: string): Promise<void> => {
    try {
      const newUserData = await getUserData(username);
      setUserData(newUserData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const contextValue: UserContextType = {
    userData,
    updateUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
