import React from "react";
import UserSearchForm from "@components/UserSearchForm";
import UserInfo from "@components/UserInfo";

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 p-8 lg:py-[15vh] gap-16 flex flex-col">
      <div className="w-full mx-auto items-center flex flex-col gap-8 h-full justify-center">
        <h1 className="font-bold text-5xl tracking-tighter text-gray-50">
          Search Github Users
        </h1>
        <UserSearchForm />
      </div>

      <UserInfo />
    </main>
  );
}

export default HomePage;
