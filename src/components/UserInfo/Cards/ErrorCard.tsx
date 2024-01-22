import React from "react";
import { useUserData } from "@hooks/useUserData";

export const ErrorCard = () => {
  const { error } = useUserData();

  return (
    <div
      data-testid="error-card"
      className="flex flex-col items-center justify-center max-w-3xl w-full h-full mx-auto min-h-[384px]
       bg-gray-50 border-2 rounded-3xl text-center gap-6 p-8"
    >
      <h1 className="text-5xl font-bold text-red-600 mb-2">
        Failed to Retrieve User 😞
      </h1>
      <p className="text-xl font-medium text-gray-700 max-w-sm">
        We apologize for the inconvenience. Please double-check the username or
        try again later.
      </p>
      {error && (
        <div className="max-w-md text-xl font-normal text-red-600 mt-2">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};
