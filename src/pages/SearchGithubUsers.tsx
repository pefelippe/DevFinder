import Search from "../components/Search";
import UserProfile from "../components/UserProfile";

function SearchGithubUsers() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-8 lg:p-24">
      <div className=" w-full mx-auto items-center flex flex-col gap-8 h-full  justify-center">
        <h1 className="font-bold text-4xl text-slate-50 tracking-tighter">
          Search Github Users
        </h1>

        <div className="flex flex-col gap-24 h-full w-full  ">
          <Search />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default SearchGithubUsers;
