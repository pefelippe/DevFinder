import UserInfo from "@components/UserInfo";
import UserSearch from "@components/UserSearch";
import React from "react";

function HomePage() {
  return (
    <main className="min-h-screen p-8 lg:pt-[15vh] gap-6  flex flex-col items-center justify-start bg-gray-950 min-w-[400px]">
      <div className="w-full mx-auto flex-col items-start flex text-center gap-6 h-full justify-center max-w-3xl rounded-xl">
        <h1 className="font-bold text-3xl tracking-[1px] text-gray-50">
          gitsearcher
        </h1>
        <UserSearch />
      </div>
      <UserInfo />
    </main>
  );
}

export default HomePage;
