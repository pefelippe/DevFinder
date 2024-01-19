import { useUserContext } from "../context/UserContext";

function UserCard() {
  const { userData } = useUserContext();
  return (
    <div className="grid grid-cols-2  text-white justify-center divide-x">
      <div className="flex flex-col items-start gap-2 font-normal text-xl justify-center">
        <img
          src={userData?.avatar_url}
          className="w-32 h-32 rounded-full border-2"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{userData?.name}</h1>
          <p className="">{userData?.email}</p>
          <p className="">{userData?.location}</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center text-xl gap-5 te">
        <h1>Followers: {userData?.followers}</h1>
        <h1>Repositories: {userData?.public_repos}</h1>
        {/* numero de estrelas */}
      </div>
    </div>
  );
}

export default UserCard;
