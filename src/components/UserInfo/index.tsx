import { useUserData } from "@hooks/useUserData";

import React from "react";
import { ErrorCard } from "./Cards/ErrorCard";
import LoadingCard from "./Cards/LoadingCard";
import { UserCard } from "./Cards/UserCard";

function UserInfo() {
  const { data, isError, isPending } = useUserData();

  if (isError) return <ErrorCard />;
  if (isPending) return <LoadingCard />;
  if (data) return <UserCard {...data} />;

  return <></>;
}

export default UserInfo;
