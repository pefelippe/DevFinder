import { useUserContext } from "../hooks/useUserContext";
import { CalculateStars } from "../useCases/calculateStars";

function UserProfile() {
  const { userData } = useUserContext();

  if (!userData) return;

  return (
    <div className="grid grid-cols-2  justify-center text-lg font-normal bg-gray-50 p-8 rounded-3xl divide-black divide-x-2 max-w-2xl w-full mx-auto ">
      <div className="flex flex-col items-start gap-2 font-normal  justify-center pr-10">
        <img
          src={userData?.avatar_url}
          className="w-28 h-28 rounded-full border-2 "
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{userData?.name}</h1>
          <p className="">{userData?.email}</p>
          <p className="">{userData?.location}</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-5 pl-10 ">
        <h3>Followers: {userData?.followers}</h3>
        <h3>Repositories: {userData?.public_repos}</h3>
        <h3>Popularity:</h3>
        <CalculateStars />
      </div>
    </div>
  );
}

export default UserProfile;
