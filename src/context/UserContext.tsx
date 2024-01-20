import { createContext, ReactNode } from "react";
import { getUserData, UserData } from "../api/requests/getUserData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UserContextType {
  data: UserData | undefined;
  isPending: boolean;
  isError: boolean;
  error: AxiosError;
  mutate: (username: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: UserProviderProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation<UserData, unknown, string>({
    mutationFn: (username: string) => getUserData({ username }),
    onSuccess: (data, username) => {
      queryClient.setQueryData(["userData", username], data);
    },
  });

  const { isPending, isError, data, mutate, error } = mutation;

  const axiosError = error as AxiosError;

  const contextValue: UserContextType = {
    isPending,
    isError,
    data,
    error: axiosError,
    mutate,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
