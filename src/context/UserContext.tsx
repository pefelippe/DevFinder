import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect } from "react";
import React from "react";

import { getUserData, UserData } from "@api/requests/getUserData";

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

  // Use `useMutation` hook to handle API mutations
  const mutation = useMutation<UserData, unknown, string>({
    mutationFn: (username: string) => getUserData({ username }),
    // Update the query cache on successful mutation
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

  useEffect(() => {
    mutate("github");
  }, [mutate]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
