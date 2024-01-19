import Search from "../components/Search";
import UserProfile from "../components/UserProfile";

function SearchGithubUsers() {
  return (
    <div className="min-h-screen bg-gray-950  p-20 flex items-center">
      <div className=" w-full mx-auto items-center flex flex-col gap-8 h-full  justify-center">
        <p className="font-bold text-4xl text-slate-50 tracking-tighter">
          Search Github Users
        </p>

        <div className="flex flex-col gap-16 h-full w-full  ">
          <Search />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default SearchGithubUsers;
