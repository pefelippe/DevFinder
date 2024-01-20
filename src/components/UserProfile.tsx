import { FaBuilding } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

import { useUserContext } from "../hooks/useUserContext";
import StarsRating from "./StarsRating";

const UserInfo = ({ info, title }: { info: number; title: string }) => {
  return (
    <div className="flex flex-col items-center  ">
      <p className="text-xl lg:text-3xl font-medium">{info}</p>
      <div className="text-lg">{title}</div>
    </div>
  );
};

function UserProfile() {
  const { userData } = useUserContext();

  if (!userData) return null;

  return (
    <div
      className="flex max-lg:flex-col justify-start text-lg max-lg:max-w-xl lg:w-fit w-full
     bg-gray-50 rounded-3xl  mx-auto overflow-hidden "
    >
      <img
        src={userData?.avatar_url}
        className="flex-shrink-1 object-cover w-full lg:max-w-sm max-lg:max-h-[250px] "
      />

      <div className="flex flex-col items-start justify-between  gap-6 p-6 lg:p-12 w-full">
        <div className="flex flex-col gap-3 w-full ">
          <StarsRating />
          <span>
            <div className="flex gap-2 items-center text-xl lg:text-3xl font-bold">
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

        <div className="flex items-start justify-start gap-10 w-full">
          <UserInfo info={userData?.followers} title="Followers" />
          <UserInfo info={userData?.following} title="Following" />
          <UserInfo info={userData?.public_repos} title="Repositories" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
