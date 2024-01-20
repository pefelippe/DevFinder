import { createContext, ReactNode, useState } from "react";

import { getUserData, UserData } from "../api/requests/getUserData";

interface UserContextType {
  userData: UserData | null;
  GetUserData: (username: string) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: TransactionProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  const GetUserData = async (username: string): Promise<void> => {
    try {
      const newUserData = await getUserData(username);
      setUserData(newUserData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const contextValue: UserContextType = {
    userData,
    GetUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
