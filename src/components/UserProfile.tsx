import { FaBuilding } from "react-icons/fa";
import { useUserContext } from "../hooks/useUserContext";
import { CalculateStars } from "../useCases/calculateStars";
import { FaMapLocation } from "react-icons/fa6";

const UserInfo = ({ info, title }: { info: number; title: string }) => {
  return (
    <div className="flex flex-col items-center  ">
      <p className="text-3xl font-medium">{info}</p>
      <div className="text-lg">{title}</div>
    </div>
  );
};
function UserProfile() {
  const { userData } = useUserContext();

  if (!userData) return null;

  return (
    <div className="flex justify-start text-lg  bg-gray-50 rounded-3xl w-fit mx-auto overflow-hidden ">
      <img
        src={userData?.avatar_url}
        className="flex-shrink-1 object-cover  max-w-sm  "
      />

      <div className="flex flex-col items-start justify-between  gap-6 px-12 p-8 w-full">
        <div className="flex flex-col gap-3 w-full ">
          <CalculateStars />
          <span>
            <div className="flex  gap-2 items-center text-3xl font-bold">
              {userData?.name}
              <h1 className="text-xl font-thin">@{userData?.login}</h1>
            </div>
          </span>

          <h1 className="max-w-sm">{userData?.bio}</h1>

          {userData?.company && (
            <p className="flex gap-2 items-center">
              <FaBuilding /> {userData?.company}
            </p>
          )}

          {userData?.location && (
            <p className="flex gap-2 items-center">
              <FaMapLocation /> {userData?.location}
            </p>
          )}
        </div>

        <div className="flex items-start justify-start gap-12 w-full">
          <UserInfo info={userData?.followers} title="Followers" />
          <UserInfo info={userData?.following} title="Following" />
          <UserInfo info={userData?.public_repos} title="Repositories" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
