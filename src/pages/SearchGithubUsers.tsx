import { FaGithub } from "react-icons/fa";
import Search from "../components/Search";
import UserProfile from "../components/UserProfile";

function SearchGithubUsers() {
  return (
    <main className="min-h-screen bg-gray-950 py-16 px-8 lg:pt-[20vh] ">
      <div className=" w-full mx-auto items-center flex flex-col gap-8 h-full  justify-center ">
        <header className="flex gap-2 text-gray-50">
          <FaGithub className="h-10 w-10" />
          <h1 className="font-bold text-4xl  tracking-tighter">
            Search Github Users
          </h1>
        </header>

        <section className="flex flex-col gap-12 h-full w-full  ">
          <Search />
          <UserProfile />
        </section>
      </div>
    </main>
  );
}

export default SearchGithubUsers;
