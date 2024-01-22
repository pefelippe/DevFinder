import UserInfo from "@components/UserInfo";
import UserSearch from "@components/UserSearch";
import React from "react";

function HomePage() {
  return (
    <main className="min-h-screen p-8 lg:py-[15vh] gap-6 lg:gap-12 flex flex-col items-center justify-start">
      <div className="w-full mx-auto flex-col items-start flex text-center gap-6 h-full justify-center max-w-4xl rounded-xl">
        <h1 className="font-bold text-3xl tracking-[1px] text-gray-950">
          Github Searcher
        </h1>
        <UserSearch />
      </div>
      <UserInfo />
    </main>
  );
}

export default HomePage;
