import { FaBuilding } from "react-icons/fa";
import { useUserContext } from "../hooks/useUserContext";
import Stars from "./Stars";
import { FaMapLocation } from "react-icons/fa6";
import { UserData } from "../api/requests/getUserData";
import CircularProgress from "@mui/material/CircularProgress";

const UserInfo = ({ info, title }: { info: number; title: string }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-xl lg:text-3xl font-medium">{info}</p>
      <div className="text-lg">{title}</div>
    </div>
  );
};

const UserDetailsCard = (data: UserData) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    company,
    location,
    followers,
    following,
    public_repos,
  } = data;

  return (
    <div
      className="flex max-lg:flex-col justify-start text-lg max-lg:max-w-xl max-w-3xl w-full border-2
     bg-gray-50 rounded-3xl  mx-auto overflow-hidden "
    >
      <img
        src={avatar_url}
        className="flex-shrink-1 object-cover w-full lg:max-w-xs max-lg:max-h-[250px] z-30"
        alt="User Avatar"
      />

      <div className="flex flex-col items-start justify-between gap-12 p-6 px-8  w-full">
        <div className="flex flex-col gap-3 w-full font-light text-lg">
          <Stars />
          <div className="flex gap-2 items-center  text-xl lg:text-3xl font-bold">
            <span>{name}</span>
            <h1 className="text-xl font-light">{login}</h1>
          </div>

          {bio && <p className="max-w-sm ">{bio}</p>}

          {company && (
            <p className="flex gap-2 items-center">
              <FaBuilding /> {company}
            </p>
          )}

          {location && (
            <p className="flex gap-2 items-center">
              <FaMapLocation /> {location}
            </p>
          )}
        </div>

        <div className="flex items-start justify-start gap-8 w-full">
          <UserInfo info={followers} title="Followers" />
          <UserInfo info={following} title="Following" />
          <UserInfo info={public_repos} title="Repositories" />
        </div>
      </div>
    </div>
  );
};

const ErrorCard = () => {
  const { error } = useUserContext();

  return (
    <div
      className="flex flex-col items-center justify-center max-w-3xl w-full h-full mx-auto p-8
     bg-gray-50 border-2 rounded-3xl text-center gap-2"
    >
      <span className="text-5xl mb-2">😞</span>
      <h1 className="text-3xl font-bold text-red-600">
        Failed to Retrieve User
      </h1>
      <p className="text-lg font-medium text-gray-700 max-w-xs ">
        Please double-check the username or try later.
      </p>
      {error && (
        <div className="max-w-xs text-lg font-thin text-red-600">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

function UserProfile() {
  const { data, isError, isPending } = useUserContext();

  if (isPending)
    return (
      <div className="mx-auto">
        <CircularProgress />
      </div>
    );

  if (isError) return <ErrorCard />;

  if (data) return <UserDetailsCard {...data} />;

  return <></>;
}

export default UserProfile;
